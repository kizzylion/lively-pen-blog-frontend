// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Remove tailwindcss() plugin here – it doesn’t exist under this name.
// Tailwind is picked up from your PostCSS config or index.css.

export default defineConfig({
  server: {
    port: 8080,
    host: "::",
  },
  plugins: [react(), tsconfigPaths(), tailwindcss()],
});
