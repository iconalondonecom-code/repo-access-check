import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { products } from "@/lib/catalog";
import { insights } from "@/lib/insights";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search the Ronfit Forte Portfolio & Insights" },
      {
        name: "description",
        content:
          "Search Ronfit Forte products by name, format or category, and find insight articles on healthcare distribution and portfolio planning.",
      },
      { property: "og:title", content: "Search | Ronfit Forte" },
      {
        property: "og:description",
        content: "Find products, categories and articles across the Ronfit Forte website.",
      },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();

  const productHits = term
    ? products.filter((p) =>
        [p.name, p.format, p.category, p.summary].join(" ").toLowerCase().includes(term),
      )
    : [];
  const insightHits = term
    ? insights.filter((a) =>
        [a.title, a.topic, a.excerpt].join(" ").toLowerCase().includes(term),
      )
    : [];

  return (
    <main>
      <PageHero
        eyebrow="Search"
        title="Find a product or article"
        intro="Search across the full product portfolio and the insights library."
      >
        <div className="mt-8 max-w-xl">
          <label className="sr-only" htmlFor="search-input">
            Search
          </label>
          <input
            id="search-input"
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “syrup”, “cold”, “gel” or “distribution”"
            className="w-full rounded-full border border-border bg-background px-6 py-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
        </div>
      </PageHero>

      <section className="container-page py-14">
        {!term ? (
          <p className="text-sm text-muted-foreground">
            Enter a search term above to see matching products and articles.
          </p>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              {productHits.length + insightHits.length} result
              {productHits.length + insightHits.length === 1 ? "" : "s"} for “{q.trim()}”
            </p>

            {productHits.length > 0 ? (
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-foreground">Products</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {productHits.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </div>
            ) : null}

            {insightHits.length > 0 ? (
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-foreground">Insights</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {insightHits.map((a) => (
                    <Link
                      key={a.slug}
                      to="/insights/$slug"
                      params={{ slug: a.slug }}
                      className="rounded-[1.75rem] border border-border bg-card p-6 transition-shadow hover:shadow-lift"
                    >
                      <span className="text-xs font-semibold tracking-[0.18em] text-primary">
                        {a.topic}
                      </span>
                      <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
                        {a.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {a.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            {productHits.length === 0 && insightHits.length === 0 ? (
              <p className="mt-10 text-base text-muted-foreground">
                No matches. Try a broader term, or browse the full portfolio.
              </p>
            ) : null}
          </>
        )}
      </section>

      <EnquiryCTA />
    </main>
  );
}
