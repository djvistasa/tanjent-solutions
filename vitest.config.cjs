import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude],
    environment: 'happy-dom',
    globals: true,
    coverage: {
      exclude: [
        'src/utils/**.ts',
        'src/theme/**.ts',
        'src/api/**',
        'src/hooks/**',
        'src/components/**/styledComponents/**',
        'src/components/**/__tests__/**.test.tsx',
      ],
      branches: 75,
      functions: 75,
      statements: 75,
      lines: 75,
    },
  },
});
