import { env } from 'cloudflare:workers';
import { eq, desc } from 'drizzle-orm';
import { resolveAccount, json } from '../../lib/account';
import { conversion } from '../../db/auth-schema';
import { drizzle } from 'drizzle-orm/d1';

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const account = await resolveAccount(request);
  if (!account.user) {
    return json({ ok: true, items: [] });
  }
  const db = drizzle(env.DB);
  const rows = await db
    .select()
    .from(conversion)
    .where(eq(conversion.userId, account.user.id))
    .orderBy(desc(conversion.createdAt))
    .limit(50);
  return json({
    ok: true,
    items: rows.map((r) => ({
      id: r.id,
      format: r.format,
      status: r.status,
      inputName: r.inputName,
      inputSize: r.inputSize,
      pages: r.pages,
      createdAt: r.createdAt.toISOString(),
    })),
  });
}