/**
 * Global site configuration.
 *
 * WordPress portability note: every value here maps to an editable option
 * (Theme Options / ACF options page). No component hardcodes contact details.
 */

// Production origin + base path for this deployment (GitHub Pages).
// Keep SITE_URL's path in sync with the `base` in vite.config.ts.
export const SITE_ORIGIN = "https://iconalondonecom-code.github.io";
export const SITE_URL = `${SITE_ORIGIN}/repo-access-check`;

/** Absolute canonical / og:url for a router path, e.g. "/" or "/about". */
export const canonicalUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

/** Turns a root-relative asset url (already base-prefixed) into an absolute URL. */
export const absoluteAsset = (url: string) => `${SITE_ORIGIN}${url}`;

export const site = {
  name: "Ronfit Forte",
  legalName: "Ronfit Forte",
  parent: {
    name: "Ronak Group",
    url: "https://ronak.global",
    label: "ronak.global",
  },
  tagline: "A Brand of Ronak Group",
  email: "contact@ronak.global",
  phone: "+971 50 137 7674",
  whatsapp: "971501377674",
  address: {
    lines: [
      "Ronak Group Building",
      "Gotri Road",
      "Next to Nilgiri Terrace",
      "Gadapura",
      "Hari Nagar",
    ],
    city: "Vadodara",
    region: "Gujarat",
    postalCode: "390021",
    country: "India",
  },
  locales: [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
  ],
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Global Business", to: "/global-business" },
  { label: "Business Partnership", to: "/business-partnership" },
  { label: "Contact", to: "/contact" },
] as const;

// Insights is not in the header's main nav (kept to 6 items so it fits on
// one line) — it's linked from the footer's Quick Links instead.
export const insightsNav = { label: "Insights", to: "/insights" } as const;

export const businessTypes = [
  "Distributor",
  "Importer",
  "Wholesaler",
  "Pharmacy Network",
  "Retail Chain",
  "Healthcare Business",
  "Other",
] as const;
