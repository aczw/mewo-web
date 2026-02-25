import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

/**
 * @see https://astro.build/config
 */
export default defineConfig({
  site: "https://mewo.czw.sh",
  trailingSlash: "never",

  adapter: vercel({
    imageService: true,
  }),

  integrations: [sitemap()],
});
