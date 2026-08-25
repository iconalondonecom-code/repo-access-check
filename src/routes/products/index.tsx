import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { categories, products, type CategorySlug } from "@/lib/catalog";
import { canonicalUrl } from "@/lib/site";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Healthcare Product Portfolio | Ronfit Forte" },
      {
        name: "description",
        content:
          "Browse the complete Ronfit Forte healthcare portfolio across multiple categories — infant nutrition, paediatric, cold and flu, cough, pain relief, topical care and dermatology.",
      },
      { property: "og:title", content: "Healthcare Product Portfolio | Ronfit Forte" },
      {
        property: "og:description",
        content:
          "The complete Ronfit Forte product range, organised by therapeutic category for distributors and importers.",
      },
      { property: "og:url", content: canonicalUrl("/products") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/products") }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<CategorySlug | "all">("all");
  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="The complete Ronfit Forte product range"
        intro="Products across multiple healthcare categories, presented for distributors, importers, wholesalers, pharmacy networks and retail chains. No pricing is published — commercial terms are discussed directly with each partner."
      />

      <section className="container-page py-14">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            type="button"
            onClick={() => setActive("all")}
            aria-pressed={active === "all"}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === "all"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            All products
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(c.slug)}
              aria-pressed={active === c.slug}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === c.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {c.shortName}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {visible.length} {visible.length === 1 ? "product" : "products"}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 curve-top">
        <div className="container-page">
          <p className="pill-label">Browse by category</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Category pages
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/product-category/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </main>
  );
}
