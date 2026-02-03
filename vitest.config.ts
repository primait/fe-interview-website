import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    include: ["src/**/*.test.{js,ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
