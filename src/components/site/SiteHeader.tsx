import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { toast } from "sonner";

import { Logo } from "./Logo";
import { categories } from "@/lib/catalog";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [locale, setLocale] = useState<(typeof site.locales)[number]>(site.locales[0]);

  const selectLocale = (l: (typeof site.locales)[number]) => {
    setLocale(l);
    setLangOpen(false);
    if (l.code !== "en") {
      toast(`${l.label} content is coming soon`, {
        description: "The site is currently published in English — we're working on full translations.",
      });
    }
  };

  return (
    <header className="sticky top-0 z-[60] border-b border-border/60 bg-background">
      <div className="mx-auto flex h-24 w-full max-w-[100rem] items-center justify-between gap-3 px-4 sm:h-28 sm:px-5 md:h-32 lg:h-36">
        <Logo />

        <nav aria-label="Main navigation" className="hidden flex-nowrap items-center gap-1 xl:flex">
          {mainNav.map((item) =>
            item.label === "Products" ? (
              <div
                key={item.label}
                className="relative inline-flex shrink-0 items-center"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  to={item.to}
                  className="inline-flex shrink-0 items-center gap-1 self-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold leading-none text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "font-bold text-primary" }}
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
                              className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-secondary"
                            >
                              <span
                                className={`flex size-9 shrink-0 items-center justify-center rounded-full ${c.accentClass} text-[0.65rem] font-semibold text-charcoal transition-transform duration-300 group-hover:scale-110`}
                              >
                                {c.number}
                              </span>
                              <span className="text-sm font-medium text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                                {c.name}
                              </span>
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
                className="inline-flex shrink-0 items-center self-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold leading-none text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "font-bold text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary"
              aria-label="Select language"
              aria-expanded={langOpen}
            >
              <Globe className="size-3.5" aria-hidden="true" />
              {locale.label}
              <ChevronDown className="size-3" aria-hidden="true" />
            </button>

            {langOpen ? (
              <div className="absolute right-0 top-full w-44 pt-2">
                <ul className="overflow-hidden rounded-2xl border border-border bg-popover p-1.5 shadow-lift">
                  {site.locales.map((l) => (
                    <li key={l.code}>
                      <button
                        type="button"
                        onClick={() => selectLocale(l)}
                        aria-current={l.code === locale.code}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-secondary ${
                          l.code === locale.code
                            ? "font-semibold text-primary"
                            : "font-medium text-foreground"
                        }`}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <Link
            to="/business-enquiry"
            className="hidden whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] sm:inline-flex xl:px-5"
          >
            Business Enquiry
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <nav aria-label="Mobile navigation" className="container-page flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                activeProps={{ className: "font-bold text-primary" }}
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
