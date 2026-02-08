import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*'
    ],
    reporters: ['verbose'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/test/**',
        '**/tests/**',
        '**/*.d.ts',
        '**/vite.config.*',
        '**/vitest.config.*',
        '**/eslint.config.*',
        '**/jest.config.*',
        '**/babel.config.*',
        '**/tsconfig.*',
        '**/package*.json',
        '**/README.md',
        '**/LICENSE',
        '**/public/**',
        '**/index.html',
        '**/src/main.tsx',
        '**/src/App.tsx',
        '**/src/vite-env.d.ts'
      ]
    }
  }
});