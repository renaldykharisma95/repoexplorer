import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@providers": path.resolve(__dirname, "src/providers"),
    },
  },
  plugins: [react()],
  base: "/repoexplorer/",
  define: {
    "process.env": process.env,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      exclude: [
        "eslint.config.js",
        "jest.fileMock.js",
        "vite.config.ts",
        "src/interfaces/**",
        "src/App.tsx",
        "src/main.tsx",
      ],
    },
  },
});
