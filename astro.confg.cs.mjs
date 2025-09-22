import shared from "./astro.config.shared.mjs";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import { defineConfig } from "astro/config";
import { getCustomPages, getI18N } from "./src/shared/i18n/index";

const language = 'cs';
const i18n = getI18N({ language });
const customPages = await getCustomPages({ language });

export default defineConfig({
  ...shared,
  site: i18n.SITE,
  srcDir: "./src/cs",
  redirects: {
    "/paddle-kurty": "/", // Redirecciones traducidas si las tenés
    "/panoramaticka": "/panoramic",
    "/turnajova": "/tournament",
    "/klubova": "/club",
    "/klubova-force-80": "/club-force-80",
    "/mini": "/mini",
    "/mobilni": "/mobile",
    "/panoramaticka-force-80": "/panoramic-force-80",
    "/singlova": "/single",
    "/flow": "/tournament",
    "/nase-tovarna": "/nuestra-fabrica", // Si mantenés la ruta original
  },
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr", "it", "de", "cs"],
    routing: {
      prefixDefaultLocale: false,
    },
    domains: {
      cs: "https://www.porticosport.cz",
    },
  },
  experimental: {
    i18nDomains: true,
  },
  integrations: [
    tailwind(),
    preact(),
    sitemap({
      serialize(item) {
        const lastCharacter = item.url.slice(-1);
        if (lastCharacter === "/") {
          item.url = item.url.slice(0, -1);
        }

        const excludePatterns = [
          "https://www.porticosport.cz/distribucni-partner",
          "https://www.porticosport.cz/kontakt",
          "https://www.porticosport.cz/cookies",
          "https://www.porticosport.cz/pravni-oznaceni",
          "https://www.porticosport.cz/nase-tovarna",
          "https://www.porticosport.cz/soukromi",
          "https://www.porticosport.cz/projekty",
          "https://www.porticosport.cz/kariera"
        ];

        for (const pattern of excludePatterns) {
          if (item.url === pattern) {
            return null;
          }
        }

        return item;
      },
      customPages,
    }),
  ],
});
