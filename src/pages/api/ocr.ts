import { env } from 'cloudflare:workers';
import { recognize } from '../../server/ocr-provider';
import { resolveAccount, consumeUsage, json } from '../../lib/account';
import { conversion } from '../../db/auth-schema';
import { drizzle } from 'drizzle-orm/d1';
import type { APIContext } from 'astro';

export const prerender = false;

const ACCEPTED = new Set([
  'image/png',
  'image/jpeg',
  'application/pdf',
  'application/msword',
  'application/vnd.ms-powerpoint',
]);

export async function POST(ctx: APIContext) {
  const { request } = ctx;
  const account = await resolveAccount(request);
  const decision = await consumeUsage(account, Date.now(), env);
  if (!decision.allowed) {
    return json(
      {
        ok: false,
        code: 'limit',
        error: 'You have reached your daily conversion allowance for today.',
        used: decision.used,
        limit: decision.limit,
        remaining: decision.remaining,
        resetAt: decision.resetAt,
        unlimited: decision.unlimited,
      },
      429,
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, code: 'bad-body', error: 'Expected a multipart form upload.' }, 400);
  }
  const file = form.get('file');
  if (!(file instanceof File)) {
    return json({ ok: false, code: 'no-file', error: 'No file was attached to the request.' }, 400);
  }
  const mimeType = String(form.get('mimeType') ?? file.type);
  if (!ACCEPTED.has(mimeType)) {
    return json({ ok: false, code: 'type', error: 'That file type cannot be recognized.' }, 415);
  }

  const bytes = await file.arrayBuffer();
  let result: Awaited<ReturnType<typeof recognize>>;
  try {
    result = await recognize({ mimeType, name: file.name, size: bytes.byteLength }, bytes);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'The recognition service failed.';
    return json({ ok: false, code: 'provider', error: msg }, 502);
  }

  if (account.user) {
    const db = drizzle(env.DB);
    void ctx.locals.cfContext
      .waitUntil(
        db
          .insert(conversion)
          .values({
            id: crypto.randomUUID(),
            userId: account.user.id,
            format: mimeType,
            status: 'ok',
            inputName: file.name || null,
            inputSize: bytes.byteLength,
            pages: result.pages,
          })
          .run(),
      );
  }

  return json({
    ok: true,
    kind: 'ocr',
    sheets: result.sheets,
    pages: result.pages,
    confidence: result.confidence,
    used: decision.used,
    remaining: decision.remaining,
    resetAt: decision.resetAt,
    unlimited: decision.unlimited,
  });
}