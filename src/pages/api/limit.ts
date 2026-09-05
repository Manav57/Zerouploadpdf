import { env } from 'cloudflare:workers';
import { resolveAccount, usageFor, consumeUsage, json } from '../../lib/account';
import type { APIContext } from 'astro';

export const prerender = false;

export async function GET(ctx: APIContext) {
  const account = await resolveAccount(ctx.request);
  const usage = await usageFor(account, Date.now(), env);
  const body = { ok: true, ...usage };
  return json(body);
}

export async function POST(ctx: APIContext) {
  const { request } = ctx;
  const account = await resolveAccount(request);
  const now = new Date();

  let isReset = false;
  try {
    const body = (await request.json().catch(() => null)) as { reset?: boolean } | null;
    isReset = body?.reset === true && env.ZUP_TEST_MODE === '1';
  } catch {
    isReset = false;
  }

  if (isReset) {
    const fingerprint = account.fingerprint ?? account.anonFingerprint;
    await env.ZUP_LIMITS_KV.delete(`conv:${fingerprint}:${now.toISOString().slice(0, 10)}`);
    return json({ ok: true, used: 0, limit: 10, remaining: 10, resetAt: now.toISOString() });
  }

  const decision = await consumeUsage(account, now.getTime(), env);
  if (!decision.allowed) {
    return json({ ok: true, ...decision });
  }
  return json({ ok: true, ...decision });
}