// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://utopia5327.github.io/astro-maplibre-template",
  base: "astro-maplibre-template",
  integrations: [mdx(), sitemap(), tailwind()],
});
