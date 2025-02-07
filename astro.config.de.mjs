import shared from "./astro.config.shared.mjs";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import { defineConfig } from "astro/config";
import { getCustomPages, getI18N } from "./src/shared/i18n/index";

const language = 'de';
const i18n = getI18N({language});
const customPages = await getCustomPages({ language })

export default defineConfig({
  ...shared,
  site: i18n.SITE,
  srcDir: "./src/de",
  redirects: {
    "/padel-plaetze": "/",
    "/padel-plaetze/panoramique": "/panoramic",
    "/padel-plaetze/flow": "/tournament",
    "/padel-plaetze/club": "/club",
    "/padel-plaetze/club-force-80": "/club-force-80",
    "/padel-plaetze/mini": "/mini",
    "/padel-plaetze/mobile": "/mobile",
    "/padel-plaetze/panoramic-force-80": "/panoramic-force-80",
    "/padel-plaetze/single": "/single",
    "/flow": "/tournament",
  },
  i18n: {
    defaultLocale: "de",
    locales: ["es", "en", "fr", "it", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
    domains: {
      fr: "https://www.porticosport.fr",
      es: "https://www.porticosport.es",
      en: "https://www.porticosport.com",
      it: "https://www.porticosport.it",
    },
  },
  experimental: {
    i18nDomains: true,
  },
  integrations: [tailwind(), preact(), sitemap({
    serialize(item) {
      const lastCharacter = item.url.slice(-1);
      if (lastCharacter === "/") {
        item.url = item.url.slice(0, -1);
      }

       const excludePatterns = [
    "https://www.porticosport.de/autorisierter-distributor",
    "https://www.porticosport.de/cookies",
    "https://www.porticosport.de/kundenkontakt",
    "https://www.porticosport.de/legal-advice",
    "https://www.porticosport.de/unsere-fabrik",
    "https://www.porticosport.de/datenschutzrichtlinie",
    "https://www.porticosport.de/projekte",
    "https://www.porticosport.de/arbeiten-sie-mit-uns"
    
  ];

  for (const pattern of excludePatterns) {
   
      if (item.url === pattern) {
        return null;  
      }}
      return item;
    },
    customPages,
  }),],
});
