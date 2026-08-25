import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { getCategory, getProduct, relatedProducts } from "@/lib/catalog";
import { absoluteAsset, canonicalUrl, site, whatsappLink } from "@/lib/site";
import { breadcrumbSchema, productSchema } from "@/lib/seo";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    const category = getCategory(product.category)!;
    return { product, category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} | ${loaderData.category.name} | Ronfit Forte` },
          { name: "description", content: loaderData.product.summary.slice(0, 158) },
          { property: "og:title", content: `${loaderData.product.name} | Ronfit Forte` },
          { property: "og:description", content: loaderData.product.summary.slice(0, 158) },
          {
            property: "og:url",
            content: canonicalUrl(`/products/${loaderData.product.slug}`),
          },
          { property: "og:image", content: absoluteAsset(loaderData.product.image) },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: canonicalUrl(`/products/${loaderData.product.slug}`) }]
      : [],
    scripts: loaderData
      ? [
          productSchema(loaderData.product, loaderData.category),
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "Products", path: "/products" },
            { label: loaderData.product.name },
          ]),
        ]
      : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product, category } = Route.useLoaderData();
  const related = relatedProducts(product, 4);

  return (
    <main>
      <Breadcrumbs
        trail={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: product.name },
        ]}
      />

      <section className="container-page grid gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <div className={`${category.accentClass} flex items-center justify-center rounded-[2.5rem] p-10`}>
          <img
            src={product.image}
            alt={product.imageAlt}
            width={900}
            height={900}
            className="h-auto max-h-[26rem] w-auto object-contain"
          />
        </div>

        <div>
          <Link
            to="/product-category/$slug"
            params={{ slug: category.slug }}
            className="pill-label"
          >
            {category.name}
          </Link>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.14em] text-muted-foreground">
            {product.format}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{product.summary}</p>

          <h2 className="mt-9 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Product notes
          </h2>
          <ul className="mt-4 space-y-3">
            {product.details.map((d) => (
              <li key={d.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {d}
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-2xl border border-border bg-secondary p-5 text-sm leading-relaxed text-muted-foreground">
            Availability, documentation and product requirements differ by territory. We discuss
            these directly with each partner rather than publishing market-specific information
            here.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/business-enquiry"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Enquire about this product
            </Link>
            <a
              href={whatsappLink(`Hello Ronfit Forte, I would like information about ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              WhatsApp our team
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary">
              {site.email}
            </a>
          </p>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-secondary py-16 curve-top">
          <div className="container-page">
            <p className="pill-label">Related</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              More from {category.name}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <EnquiryCTA />
    </main>
  );
}
