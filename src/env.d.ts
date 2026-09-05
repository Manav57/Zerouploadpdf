/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

declare namespace Cloudflare {
  interface Env {
    ZUP_TEST_MODE?: string;

    ZUP_LIMITS_KV: KVNamespace;

    DB: D1Database;

    BETTER_AUTH_SECRET: string;
    BETTER_AUTH_URL: string;

    AUTH_EMAIL_PROVIDER?: string;
    AUTH_EMAIL_SENDER?: string;
    AUTH_MAILBOX_URL?: string;

    GOOGLE_CLIENT_ID?: string;
    GOOGLE_CLIENT_SECRET?: string;
  }
}