import svgr from "vite-plugin-svgr";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [svgr()],
  assetsInclude: ["**/*.svg", "**/*.JPG"],
  test: {
    exclude: [...configDefaults.exclude],
    environment: "happy-dom",
    setupFiles: ["./setupTests.ts"],
    globals: true,
    coverage: {
      exclude: [
        "src/utils/**.ts",
        "src/theme/**.ts",
        "src/api/**",
        "src/hooks/**",
        "src/components/**/styledComponents/**",
        "src/components/**/__tests__/**.test.tsx",
        "**/node_modules/**",
      ],
      branches: 75,
      functions: 75,
      statements: 75,
      lines: 75,
    },
  },
});
