import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      enabled: true,
      exclude: [
        '**/src/app/**',
        '**/src/components/**',
        '**/src/data/**',
        '**/src/types/**',
        '**/node_modules/**',
        '*.config.*',
        '**/.next/**',
        '**/*d.ts',
      ],
      reporter: ['text', 'lcovonly'],
      all: true,
    },
  },
});
