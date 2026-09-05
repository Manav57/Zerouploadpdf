import { describe, expect, it } from 'vitest';
import type { KvStore } from '../../src/lib/limits';
import {
  DAILY_LIMIT,
  checkAndIncrement,
  evaluate,
  nextUtcMidnight,
  nonceHex,
  utcDateKey,
} from '../../src/lib/limits';

function memoryKv(): KvStore & { store: Map<string, string> } {
  const store = new Map<string, string>();
  return {
    store,
    async get(key) {
      return store.get(key) ?? null;
    },
    async put(key, value, options) {
      if (options?.expirationTtl && options.expirationTtl <= 0) {
        store.delete(key);
        return;
      }
      store.set(key, value);
    },
  };
}

const NOW = Date.parse('2026-09-05T12:00:00.000Z');
const iso = (ts: number) => new Date(ts).toISOString();

describe('evaluate', () => {
  it('allows below the limit and caps used', () => {
    expect(evaluate(4, 10, iso(NOW)).allowed).toBe(true);
    expect(evaluate(10, 10, iso(NOW))).toMatchObject({
      allowed: false,
      used: 10,
      remaining: 0,
    });
  });

  it('never reports negative remaining', () => {
    expect(evaluate(999, 10, iso(NOW)).remaining).toBe(0);
  });
});

describe('checkAndIncrement', () => {
  it('increments per fingerprint and day', async () => {
    const kv = memoryKv();
    const d1 = await checkAndIncrement(kv, 'fp-1', NOW);
    expect(d1).toMatchObject({ allowed: true, used: 1, remaining: 9 });
    expect(await kv.get(`conv:fp-1:${utcDateKey(NOW)}`)).toBe('1');
  });

  it('locks out after the daily limit', async () => {
    const kv = memoryKv();
    let decision;
    for (let i = 0; i < DAILY_LIMIT; i++) {
      decision = await checkAndIncrement(kv, 'fp-2', NOW);
    }
    expect(decision).toMatchObject({ allowed: false, used: 10, remaining: 0 });
    const over = await checkAndIncrement(kv, 'fp-2', NOW);
    expect(over).toMatchObject({ allowed: false, used: 10, remaining: 0 });
    expect(kv.store.size).toBe(1);
  });

  it('keeps fingerprints independent', async () => {
    const kv = memoryKv();
    for (let i = 0; i < 5; i++) await checkAndIncrement(kv, 'a', NOW);
    const b = await checkAndIncrement(kv, 'b', NOW);
    expect(b).toMatchObject({ allowed: true, used: 1, remaining: 9 });
  });

  it('resets on a new UTC day', async () => {
    const kv = memoryKv();
    for (let i = 0; i < 10; i++) await checkAndIncrement(kv, 'fp-3', NOW);
    const nextDay = NOW + 24 * 60 * 60 * 1000;
    const d = await checkAndIncrement(kv, 'fp-3', nextDay);
    expect(d).toMatchObject({ allowed: true, used: 1 });
  });

  it('reports a reset time at the next UTC midnight', async () => {
    const kv = memoryKv();
    const d = await checkAndIncrement(kv, 'fp-4', NOW);
    expect(d.resetAt).toBe('2026-09-06T00:00:00.000Z');
  });
});

describe('utcDateKey / nextUtcMidnight', () => {
  it('formats date keys and midnight resets', () => {
    expect(utcDateKey(NOW)).toBe('2026-09-05');
    expect(nextUtcMidnight(NOW)).toBe('2026-09-06T00:00:00.000Z');
    expect(nextUtcMidnight(Date.parse('2026-12-31T23:00:00.000Z'))).toBe(
      '2027-01-01T00:00:00.000Z',
    );
  });
});

describe('nonceHex', () => {
  it('produces hex strings of the requested length', () => {
    expect(nonceHex(12)).toMatch(/^[0-9a-f]{24}$/);
    expect(nonceHex(4)).toMatch(/^[0-9a-f]{8}$/);
  });
});