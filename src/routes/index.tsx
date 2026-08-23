import { createFileRoute, Link } from "@tanstack/react-router";

import { categories, featuredProducts, products } from "@/lib/catalog";
import { site } from "@/lib/site";
import hero from "@/assets/site/ronfit-forte-homepage-hero.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ronfit Forte | Global B2B Healthcare Product Portfolio" },
      {
        name: "description",
        content:
          "Ronfit Forte offers a seven-category healthcare portfolio — infant nutrition, paediatric, cold and flu, cough, pain relief, topical care and dermatology — for distributors and importers.",
      },
      { property: "og:title", content: "Ronfit Forte | Global B2B Healthcare Portfolio" },
      {
        property: "og:description",
        content:
          "A structured healthcare portfolio for distributors, importers, wholesalers and pharmacy networks worldwide.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="pill-label">{site.tagline}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A healthcare portfolio built for{" "}
              <span className="text-primary">international business partners</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ronfit Forte brings together {products.length} products across{" "}
              {categories.length} healthcare categories — organised so distributors, importers,
              wholesalers and pharmacy networks can evaluate the range quickly and start a
              conversation with our team.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/business-enquiry"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                Send a Business Enquiry
              </Link>
              <Link
                to="/products"
                className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Explore the Portfolio
              </Link>
            </div>
          </div>

          <div className="lozenge-frame">
            <img
              src={hero.url}
              alt="Ronfit Forte healthcare brand campaign visual"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-20">
        <p className="pill-label">Portfolio</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Seven healthcare categories, one structured range
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/product-category/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card transition-shadow hover:shadow-lift"
            >
              <div className={`${c.accentClass} p-6`}>
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  width={600}
                  height={420}
                  loading="lazy"
                  className="mx-auto h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                  {c.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {c.intro}
                </p>
                <span className="mt-4 text-sm font-semibold text-primary">View category →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-secondary py-20 curve-top">
        <div className="container-page">
          <p className="pill-label">Selected products</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A closer look at the range
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group rounded-[1.75rem] border border-border bg-card p-5 transition-shadow hover:shadow-lift"
              >
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="mx-auto h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="mt-5 text-base font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {p.format}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="container-page grid gap-10 py-20 lg:grid-cols-2">
        <div>
          <p className="pill-label">About Ronfit Forte</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A brand of {site.parent.name}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Ronfit Forte is the healthcare brand of {site.parent.name}, based in{" "}
            {site.address.city}, {site.address.country}. The portfolio is presented for business
            partners: a clear category structure, consistent brand presentation and a single point
            of contact for enquiries.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Product requirements, documentation and availability differ by territory, so we discuss
            those directly with each partner rather than publishing market-specific claims here.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            More about the brand
          </Link>
        </div>

        <div className="rounded-[2.5rem] bg-charcoal p-9 text-charcoal-foreground">
          <h2 className="text-2xl font-semibold">Partner with Ronfit Forte</h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-foreground/75">
            We work with distributors, importers, wholesalers, pharmacy networks and retail chains.
            Tell us your market and channel and our team will respond with the information relevant
            to your territory.
          </p>
          <dl className="mt-7 space-y-3 text-sm">
            <div>
              <dt className="text-charcoal-foreground/55">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="font-semibold text-primary">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-charcoal-foreground/55">Phone</dt>
              <dd className="font-semibold">{site.phone}</dd>
            </div>
          </dl>
          <Link
            to="/business-enquiry"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Start an enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
