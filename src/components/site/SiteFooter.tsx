import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { categories } from "@/lib/catalog";
import { mainNav, insightsNav, site } from "@/lib/site";
import { logo, groupLogo } from "@/lib/assets";

// Insights isn't in the header's nav (kept off to fit on one line) but
// still belongs in the footer's Quick Links, in its original position.
const footerQuickLinks = [
  ...mainNav.filter((item) => item.label !== "Contact"),
  insightsNav,
  ...mainNav.filter((item) => item.label === "Contact"),
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-charcoal text-charcoal-foreground curve-top">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="flex h-20 w-72 items-center justify-start rounded-2xl bg-charcoal-foreground px-5">
            <img
              src={logo.url}
              alt="Ronfit Forte logo"
              width={180}
              height={54}
              loading="lazy"
              className="h-16 w-auto object-contain object-left"
            />
          </div>
          <p className="mt-4 text-sm text-charcoal-foreground/70">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/60">
            A healthcare portfolio spanning nutrition, paediatric care, cold and flu, pain
            management, topical care and dermatology — presented for international business
            partners.
          </p>
          <div className="mt-6 flex h-20 w-60 items-center justify-start gap-3 rounded-2xl bg-charcoal-foreground px-5">
            <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-charcoal/60">
              A brand of
            </span>
            <img
              src={groupLogo.url}
              alt={`${site.parent.name} logo`}
              width={420}
              height={160}
              loading="lazy"
              className="h-14 w-auto object-contain object-left"
            />
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/50">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5">
            {footerQuickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-sm text-charcoal-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Product categories">
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/50">
            Product Categories
          </h2>
          <ul className="mt-4 space-y-2.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/product-category/$slug"
                  params={{ slug: c.slug }}
                  className="text-sm text-charcoal-foreground/80 transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-charcoal-foreground/50">
            Contact
          </h2>
          <address className="mt-4 space-y-4 text-sm not-italic text-charcoal-foreground/80">
            <p className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {site.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
                <span className="block">
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </span>
                <span className="block">{site.address.country}</span>
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                {site.email}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-primary"
              >
                {site.phone}
              </a>
            </p>
          </address>
          <a
            href={site.parent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-primary transition-opacity hover:opacity-80"
          >
            {site.parent.label} →
          </a>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-charcoal-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. A brand of {site.parent.name}, Vadodara,
            India.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
