/**
 * CLI-only Better Auth config used to generate the database schema.
 * Do NOT import this from application code (it must stay free of any
 * Cloudflare-runtime imports so the CLI can run it under plain Node).
 */
import { betterAuth } from 'better-auth';

export const auth = betterAuth({
  appName: 'ZeroUploadPDF',
  emailAndPassword: { enabled: true },
  user: {
    additionalFields: {
      plan: {
        type: 'string',
        required: false,
        input: false,
        defaultValue: 'free',
      },
    },
  },
});