import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/auth-schema.ts',
  out: './migrations',
  dialect: 'sqlite',
  driver: 'dummy',
  dbCredentials: {
    url: 'file:./local-d1.sqlite',
  },
});