import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : "/juansouza-portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.PNG", "**/*.png"],
  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), "/Users/juansouza/Downloads"],
    },
  },
}));
