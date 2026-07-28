// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://angojay.com",

  vite: {
      plugins: [tailwindcss()],
    },

  server: {
      port: 3000,
      host: true
  },

  integrations: [react()]
});