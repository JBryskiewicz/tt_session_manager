/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "vite-plugin-sass";

export default defineConfig({
  plugins: [react(), sass()],
  test: {
    environment: "jsdom",
  },
});
