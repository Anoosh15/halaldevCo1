import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      // External dependencies here only if they are loaded from external sources like CDNs
      // external: ['react', 'react-dom'],
    },
  },
});
