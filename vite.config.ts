/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import sass from "vite-plugin-sass";

export default defineConfig({
  plugins: [react(), sass()],
  test: {
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});
