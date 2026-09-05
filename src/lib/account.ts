import { auth } from '../auth/index';
import type { DrizzleAuthUser } from '../auth/types';
import { DAILY_LIMIT, evaluate, nextUtcMidnight, utcDateKey } from './limits';

export interface AccountContext {
  user: DrizzleAuthUser | null;
  /** Fingerprint used for the daily conversion counter. */
  fingerprint: string | null;
  /** Anonymous fallback fingerprint (derived from the request). */
  anonFingerprint: string;
  /** True when the user is on a paid plan and must never be limited. */
  unlimited: boolean;
}

/**
 * Resolves the authenticated user (if any) from the incoming request using
 * Better Auth's session cookie. Anonymous requests stay anonymous.
 */
export async function resolveAccount(request: Request): Promise<AccountContext> {
  const ip = request.headers.get('cf-connecting-ip') ?? request.headers.get('x-forwarded-for') ?? 'local';
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    const user = (session && session.user ? session.user : null) as DrizzleAuthUser | null;
    if (user) {
      return {
        user,
        fingerprint: `u:${user.id}`,
        anonFingerprint: ip,
        unlimited: user.plan === 'pro',
      };
    }
  } catch {
    // Fall through to anonymous handling if the session cannot be resolved.
  }
  return { user: null, fingerprint: null, anonFingerprint: ip, unlimited: false };
}

export async function usageFor(account: AccountContext, now: number, env: { ZUP_LIMITS_KV: KvStoreLike }) {
  const fingerprint = account.fingerprint ?? account.anonFingerprint;
  const key = `conv:${fingerprint}:${utcDateKey(now)}`;
  const raw = await env.ZUP_LIMITS_KV.get(key);
  const used = raw === null ? 0 : Number.parseInt(raw, 10) || 0;
  const resetAt = nextUtcMidnight(now);
  if (account.unlimited) {
    return { used, limit: null, remaining: null, resetAt, unlimited: true };
  }
  return { used: Math.min(used, DAILY_LIMIT), limit: DAILY_LIMIT, remaining: Math.max(0, DAILY_LIMIT - used), resetAt, unlimited: false };
}

export interface KvStoreLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete?(key: string): Promise<void>;
}

/**
 * Consumes one unit from the daily allowance. Returns a LimitDecision for the
 * response body. Pro accounts are never limited and do not consume units.
 */
export async function consumeUsage(account: AccountContext, now: number, env: { ZUP_LIMITS_KV: KvStoreLike }) {
  const fingerprint = account.fingerprint ?? account.anonFingerprint;
  const key = `conv:${fingerprint}:${utcDateKey(now)}`;
  const resetAt = nextUtcMidnight(now);
  const ttl = Math.max(60, Math.ceil((Date.parse(resetAt) - now) / 1000));

  if (account.unlimited) {
    const raw = await env.ZUP_LIMITS_KV.get(key);
    const used = raw === null ? 0 : Number.parseInt(raw, 10) || 0;
    return { allowed: true, used, limit: null, remaining: null, resetAt, unlimited: true };
  }

  const raw = await env.ZUP_LIMITS_KV.get(key);
  const used = raw === null ? 0 : Number.parseInt(raw, 10) || 0;
  if (used >= DAILY_LIMIT) {
    const decision = evaluate(used, DAILY_LIMIT, resetAt);
    return { ...decision, unlimited: false };
  }
  await env.ZUP_LIMITS_KV.put(key, String(used + 1), { expirationTtl: ttl });
  return {
    allowed: true,
    used: Math.min(used + 1, DAILY_LIMIT),
    limit: DAILY_LIMIT,
    remaining: Math.max(0, DAILY_LIMIT - used - 1),
    resetAt,
    unlimited: false,
  };
}

export function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}