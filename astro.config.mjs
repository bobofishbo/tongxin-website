import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";

export default defineConfig({
  site: "https://bobofishbo.github.io", // Your site URL
  base: "/tongxin-website/", // Your repository name
  trailingSlash: "always", // Ensure trailing slashes are consistent
  outDir: "dist", // Output directory for GitHub Pages
  i18n: {
    locales: [
      { path: "en", codes: ["en"] },      // English
      { path: "zh", codes: ["zh", "zh-CN", "zh-TW"] }, // Chinese
    ],
    defaultLocale: "en",                 // Set English as the default locale
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    base: "/tongxin-website/", // Ensures correct asset resolution during local dev
  },
});
