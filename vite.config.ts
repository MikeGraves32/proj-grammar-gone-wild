import tailwindcss from '@tailwindcss/vite';
// import { tanstackRouter } from '@tanstack/router-plugin/vite'
// import viteReact from "@vitejs/plugin-react";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});