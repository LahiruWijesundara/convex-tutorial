import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages project site (https://<user>.github.io/<repo>/)
  // Change "/convex-tutorial/" if your repository name is different.
  base: "/convex-tutorial/",
  build: {
    chunkSizeWarningLimit: 10000,
  },
});
