import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json-summary'],
      include: ['src/lib/core/**/*.ts', 'src/lib/limits.ts', 'src/lib/shares/**/*.ts'],
      exclude: ['src/lib/core/**/*.d.ts'],
    },
  },
});