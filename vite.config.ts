import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  server: {
    port: 8000,
    open: true,
  },
});
