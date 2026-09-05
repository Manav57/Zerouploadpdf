export interface KvStore {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export interface LimitDecision {
  allowed: boolean;
  limit: number;
  used: number;
  remaining: number;
  resetAt: string;
}

export const DAILY_LIMIT = 10;

export function utcDateKey(timestampMs: number): string {
  return new Date(timestampMs).toISOString().slice(0, 10);
}

export function nextUtcMidnight(timestampMs: number): string {
  const d = new Date(timestampMs);
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString();
}

export function evaluate(
  currentUsed: number,
  limit: number,
  resetAt: string,
): LimitDecision {
  const used = currentUsed >= limit ? limit : currentUsed;
  return {
    allowed: used < limit,
    limit,
    used,
    remaining: Math.max(0, limit - used),
    resetAt,
  };
}

export async function checkAndIncrement(
  kv: KvStore,
  fingerprint: string,
  now: number,
  limit = DAILY_LIMIT,
): Promise<LimitDecision> {
  const key = `conv:${fingerprint}:${utcDateKey(now)}`;
  const resetAt = nextUtcMidnight(now);
  const ttl = Math.max(60, Math.ceil((Date.parse(resetAt) - now) / 1000));
  const raw = await kv.get(key);
  const used = raw === null ? 0 : Number.parseInt(raw, 10) || 0;
  if (used >= limit) {
    return evaluate(used, limit, resetAt);
  }
  await kv.put(key, String(used + 1), { expirationTtl: ttl });
  return evaluate(used + 1, limit, resetAt);
}

export function nonceHex(length = 12): string {
  const bytes = new Uint8Array(length);
  if (typeof crypto !== 'undefined' && 'getRandomValues' in crypto) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}