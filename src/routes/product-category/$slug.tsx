import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Breadcrumbs, PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { categories, getCategory, productsByCategory } from "@/lib/catalog";

export const Route = createFileRoute("/product-category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.category.seoTitle },
          { name: "description", content: loaderData.category.seoDescription },
          { property: "og:title", content: loaderData.category.seoTitle },
          { property: "og:description", content: loaderData.category.seoDescription },
        ]
      : [],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = productsByCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <main>
      <Breadcrumbs
        trail={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: category.name }]}
      />
      <PageHero
        eyebrow={`Category ${category.number}`}
        title={category.name}
        intro={category.intro}
        image={{ url: category.image, alt: category.imageAlt }}
      />

      <section className="container-page py-14">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Products in this category
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "product" : "products"}
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 curve-top">
        <div className="container-page max-w-3xl">
          <p className="pill-label">Category notes</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {category.editorial.heading}
          </h2>
          <div className="mt-6 space-y-5">
            {category.editorial.body.map((p) => (
              <p key={p.slice(0, 32)} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <h2 className="text-xl font-semibold text-foreground">Other categories</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((c) => (
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
      </section>

      <EnquiryCTA heading={`Enquire about the ${category.name} range`} />
    </main>
  );
}
