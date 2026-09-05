import { env } from 'cloudflare:workers';
import { resolveAccount, usageFor, json } from '../../lib/account';

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const account = await resolveAccount(request);
  if (!account.user) {
    return json({ ok: true, user: null });
  }
  const usage = await usageFor(account, Date.now(), env);
  return json({
    ok: true,
    user: {
      name: account.user.name,
      email: account.user.email,
      emailVerified: account.user.emailVerified,
      plan: account.user.plan ?? 'free',
    },
    usage,
  });
}