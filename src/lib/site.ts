/**
 * Global site configuration.
 *
 * WordPress portability note: every value here maps to an editable option
 * (Theme Options / ACF options page). No component hardcodes contact details.
 */

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
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export const businessTypes = [
  "Distributor",
  "Importer",
  "Wholesaler",
  "Pharmacy Network",
  "Retail Chain",
  "Healthcare Business",
  "Other",
] as const;
