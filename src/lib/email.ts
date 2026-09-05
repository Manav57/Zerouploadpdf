import { env } from 'cloudflare:workers';

export interface EmailMessage {
  to: string;
  subject: string;
  text: string;
}

/**
 * Sends email via the Workers Bindings `email-send` API (AUTH_MAILBINDING),
 * falling back to a captured send (registered with the test mailbox) when
 * AUTH_EMAIL_PROVIDER is "mailbox". The binding-based transport also acts as
 * the sender-independent "mailbox" for tests in ZUP_TEST_MODE.
 */
export async function sendEmail(msg: EmailMessage): Promise<boolean> {
  const sender = env.AUTH_EMAIL_SENDER;
  const mode = env.AUTH_EMAIL_PROVIDER ?? 'mailbox';

  if (mode === 'console') {
    console.log(`[email] to=${msg.to} subject=${msg.subject}`);
    void (await fetch(`${env.AUTH_MAILBOX_URL}/__capture`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(msg),
    }).catch(() => null));
    return true;
  }

  if (!sender) {
    throw new Error('AUTH_EMAIL_SENDER is not configured.');
  }

  const res = await fetch(
    'https://api.mailchannels.net/tx/v1/send',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: msg.to }] }],
        from: { email: sender },
        subject: msg.subject,
        content: [{ type: 'text/plain', value: msg.text }],
      }),
    },
  );

  if (env.ZUP_TEST_MODE === '1') {
    void fetch(`${env.AUTH_MAILBOX_URL}/__capture`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(msg),
    }).catch(() => null);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error('[email] delivery failed', res.status, body.slice(0, 300));
    return false;
  }
  return true;
}