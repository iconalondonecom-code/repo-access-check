import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { categories, featuredProducts, products } from "@/lib/catalog";
import { insights } from "@/lib/insights";
import { site } from "@/lib/site";
import {
  hero,
  mobileHero,
  lifeStages,
  globalBg,
  groupBg,
  groupLogo,
  partnershipBg,
} from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ronfit Forte | Global B2B Healthcare Product Portfolio" },
      {
        name: "description",
        content:
          "Ronfit Forte offers a seven-category healthcare portfolio — infant nutrition, paediatric, cold and flu, cough, pain relief, topical care and dermatology — for distributors and importers worldwide.",
      },
      { property: "og:title", content: "Ronfit Forte | Global B2B Healthcare Portfolio" },
      {
        property: "og:description",
        content:
          "A structured healthcare portfolio for distributors, importers, wholesalers and pharmacy networks worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const lifeStagesCopy = [
  { stage: "Infancy", note: "Stage-structured infant nutrition packs." },
  { stage: "Childhood", note: "Paediatric presentations with their own identity." },
  { stage: "Adolescence", note: "Everyday cold, cough and pain formats." },
  { stage: "Adulthood", note: "Topical and oral relief presentations." },
  { stage: "Every Age", note: "Skin and dermatology daily-care range." },
];

export default function HomePage() {
  const latest = insights.slice(0, 4);

  return (
    <main>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div className="relative z-10">
            <p className="pill-label">{site.tagline}</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Trusted Healthcare.
              <br />
              Global Partnerships.
              <br />
              <span className="text-primary">Stronger Together.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ronfit Forte presents {products.length} healthcare products across{" "}
              {categories.length} therapeutic categories, organised so distributors, importers,
              wholesalers and pharmacy networks can evaluate the range quickly and start a
              conversation with our team.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/business-enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                Send Business Enquiry <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-accent"
              >
                Explore Portfolio <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-16 -top-12 -z-10 hidden h-[34rem] w-[34rem] rounded-[50%] bg-primary/90 lg:block"
            />
            <picture>
              <source media="(min-width: 768px)" srcSet={hero.url} />
              <img
                src={mobileHero.url}
                alt="Ronfit Forte healthcare product range on a curved brand stage"
                width={1600}
                height={1200}
                className="relative w-full rounded-[3rem] object-cover shadow-lift lg:rounded-[4rem]"
              />
            </picture>
          </div>
        </div>
      </section>


      {/* ---------------- Categories ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="pill-label">Portfolio</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Seven healthcare categories, one structured range
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each category is a distinct block within the portfolio, with its own packaging identity
            and its own page for business buyers to review.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              to="/product-category/$slug"
              params={{ slug: c.slug }}
              className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] ${c.accentClass} p-6 transition-transform duration-500 hover:-translate-y-1 hover:shadow-lift ${
                i >= 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full bg-background/70 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-charcoal">
                  {c.number}
                </span>
                <span className="rounded-full bg-background/70 p-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </div>

              <img
                src={c.image}
                alt={c.imageAlt}
                width={640}
                height={480}
                loading="lazy"
                className="mx-auto my-6 h-40 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-[1.06] lg:h-44"
              />

              <h3 className="text-lg font-semibold leading-snug text-charcoal">{c.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-charcoal/70">
                {c.intro}
              </p>
              <span className="mt-5 text-sm font-semibold text-primary">View category →</span>
            </Link>
          ))}

          <Link
            to="/products"
            className="flex flex-col justify-between rounded-[2.5rem] bg-charcoal p-7 text-charcoal-foreground transition-transform duration-500 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold leading-tight">
              The complete portfolio in one place
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-foreground/70">
              Browse all {products.length} products, filter by category and shortlist the
              presentations relevant to your market.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Explore all products <ArrowRight className="size-4" aria-hidden />
            </span>
          </Link>
        </div>
      </section>

      {/* ---------------- Featured products ---------------- */}
      <section className="bg-secondary py-16 curve-top lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_2.2fr]">
          <div>
            <p className="pill-label">Featured products</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Solutions that care.
              <br />
              Quality that delivers.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A selection from the Ronfit Forte range. No pricing is published — commercial terms
              are discussed directly with each partner.
            </p>
            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              Explore all products <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.slice(0, 8).map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col rounded-[2.25rem] bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="mx-auto h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-105 lg:h-56"
                />
                <h3 className="mt-6 text-base font-semibold leading-snug text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {p.format}
                </p>
                <span className="mt-auto pt-5 text-sm font-semibold text-primary">
                  View product →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Healthcare across every stage ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="pill-label">Healthcare across every stage</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Care that grows with life
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              From early nutrition to everyday relief, the portfolio is structured around the stages
              of life a pharmacy shelf serves — helping partners build a coherent range rather than
              a list of unrelated products.
            </p>
            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              Explore our portfolio <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="lozenge-frame">
            <img
              src={lifeStages.url}
              alt="Ronfit Forte healthcare support across every life stage"
              width={1400}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {lifeStagesCopy.map((s) => (
            <li key={s.stage} className="rounded-[1.75rem] border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground">{s.stage}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- Global business ---------------- */}
      <section className="container-page py-6 lg:py-10">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary text-primary-foreground lg:rounded-[4rem]">
          <img
            src={globalBg.url}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative grid gap-8 p-9 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <p className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
                Global business
              </p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Global reach. Meaningful partnerships.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/85">
                Ronfit Forte works with distributors, importers, wholesalers, pharmacy networks and
                retail chains. Requirements differ by territory, so we discuss documentation and
                availability directly with each partner.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <ul className="grid gap-4 sm:grid-cols-3">
                {[
                  { t: "Portfolio breadth", d: `${products.length} products, ${categories.length} categories` },
                  { t: "Partner channels", d: "Distribution, import, wholesale, retail" },
                  { t: "Single point of contact", d: "One team for every enquiry" },
                ].map((f) => (
                  <li key={f.t} className="rounded-2xl bg-primary-foreground/12 p-4">
                    <p className="text-sm font-semibold">{f.t}</p>
                    <p className="mt-1 text-xs leading-relaxed text-primary-foreground/80">{f.d}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/global-business"
                  className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary"
                >
                  Global business <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  to="/business-partnership"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold"
                >
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Ronak Group ---------------- */}
      <section className="container-page py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-[3rem] border border-border bg-secondary">
          <img
            src={groupBg.url}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative grid items-center gap-8 p-9 sm:p-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="pill-label">A brand of</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {site.parent.name}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Ronfit Forte is the healthcare brand of {site.parent.name}, based in{" "}
                {site.address.city}, {site.address.country}. The portfolio is presented for business
                partners: a clear category structure, consistent brand presentation and one point of
                contact for enquiries.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  About Ronfit Forte <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href={site.parent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  {site.parent.label}
                </a>
              </div>
            </div>
            <img
              src={groupLogo.url}
              alt={`${site.parent.name} logo`}
              width={420}
              height={160}
              loading="lazy"
              className="mx-auto h-20 w-auto object-contain lg:h-24"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Insights ---------------- */}
      <section className="container-page py-8 lg:py-14">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="pill-label">Insights</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ideas that inform healthcare partnerships
            </h2>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
          >
            View all insights <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((post) => (
            <Link
              key={post.slug}
              to="/insights/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                width={800}
                height={520}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {post.dateLabel} · {post.topic}
                </p>
                <h3 className="mt-3 text-base font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <span className="mt-auto pt-5 text-sm font-semibold text-primary">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------- Final partnership CTA ---------------- */}
      <section className="container-page py-14 lg:py-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-charcoal text-charcoal-foreground lg:rounded-[4rem]">
          <img
            src={partnershipBg.url}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative grid items-center gap-8 p-9 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Let&apos;s build a healthier tomorrow, together.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-foreground/75">
                Tell us your market and channel and our team will respond with the information
                relevant to your territory.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <Link
                to="/business-enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground"
              >
                Send Business Enquiry <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a href={`mailto:${site.email}`} className="font-semibold text-primary">
                {site.email}
              </a>
              <p className="text-charcoal-foreground/70">{site.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
