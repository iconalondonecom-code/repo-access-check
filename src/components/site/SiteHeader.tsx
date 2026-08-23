import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

import { Logo } from "./Logo";
import { categories } from "@/lib/catalog";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.label === "Products" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  to={item.to}
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-primary" }}
                  aria-expanded={productsOpen}
                  onFocus={() => setProductsOpen(true)}
                >
                  Products
                  <ChevronDown className="size-3.5" aria-hidden="true" />
                </Link>

                {productsOpen ? (
                  <div className="absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-[2rem] border border-border bg-popover p-3 shadow-lift">
                      <p className="px-3 pb-2 pt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Healthcare Categories
                      </p>
                      <ul className="grid grid-cols-2 gap-1">
                        {categories.map((c) => (
                          <li key={c.slug}>
                            <Link
                              to="/product-category/$slug"
                              params={{ slug: c.slug }}
                              onClick={() => setProductsOpen(false)}
                              className="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-secondary"
                            >
                              <span
                                className={`flex size-9 shrink-0 items-center justify-center rounded-full ${c.accentClass} text-[0.65rem] font-semibold text-charcoal`}
                              >
                                {c.number}
                              </span>
                              <span className="text-sm font-medium text-foreground">{c.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/products"
                        onClick={() => setProductsOpen(false)}
                        className="mt-2 block rounded-2xl bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        View all products →
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          {/* Translation-ready language selector: additional locales are added
              through the CMS / translation layer rather than in code. */}
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary md:flex"
            aria-label="Select language"
          >
            <Globe className="size-3.5" aria-hidden="true" />
            {site.locales[0].label}
            <ChevronDown className="size-3" aria-hidden="true" />
          </button>

          <Link
            to="/business-enquiry"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Business Enquiry
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="container-page flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-4 pb-1 pt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Categories
            </p>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/product-category/$slug"
                params={{ slug: c.slug }}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary"
              >
                {c.name}
              </Link>
            ))}
            <Link
              to="/business-enquiry"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Business Enquiry
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
