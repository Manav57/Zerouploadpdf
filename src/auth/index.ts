import { env } from 'cloudflare:workers';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/d1';
import * as authSchema from '../db/auth-schema';
import { sendEmail } from '../lib/email';
import type { DrizzleAuthUser } from './types';

export const auth = betterAuth({
  appName: 'ZeroUploadPDF',
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,
  trustedOrigins: [
    'https://zerouploadpdf.com',
    'https://zerouploadpdf.snapvisa.workers.dev',
    'http://localhost:4321',
    'http://127.0.0.1:8787',
    'http://127.0.0.1:8789',
  ],
  database: drizzleAdapter(drizzle(env.DB, { schema: authSchema }), {
    provider: 'sqlite',
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  advanced: {
    useSecureCookies: env.BETTER_AUTH_URL.startsWith('https://'),
    defaultCookieAttributes: {
      httpOnly: true,
      sameSite: 'lax',
    },
    ipAddress: {
      ipAddressHeaders: ['cf-connecting-ip', 'x-forwarded-for'],
    },
    backgroundTasks: {
      handler: (promise) => promise,
    },
  },
  rateLimit: {
    enabled: true,
    customRules: {
      '/sign-in/email': {
        window: Math.floor(60 / 3),
        max: 2,
      },
      '/sign-up/email': {
        window: 60,
        max: 5,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 72,
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: 'Reset your ZeroUploadPDF password',
        text: `Reset your password using this link: ${url}`,
      });
    },
    onPasswordReset: async ({ user }) => {
      void user;
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: 'Verify your ZeroUploadPDF email',
        text: `Verify your email using this link: ${url}`,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
});

export type Auth = typeof auth;
export type SessionUser = DrizzleAuthUser;
export { authSchema };