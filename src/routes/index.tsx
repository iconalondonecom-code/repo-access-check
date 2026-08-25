import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { categories, featuredProducts } from "@/lib/catalog";
import { insights } from "@/lib/insights";
import { canonicalUrl, site } from "@/lib/site";
import {
  hero,
  mobileHero,
  infantImg,
  paediatricImg,
  coldImg,
  painImg,
  lifeStages,
  globalBg,
  groupBg,
  groupLogo,
  partnershipBg,
} from "@/lib/assets";
import { HeroCarousel, type HeroSlide } from "@/components/site/HeroCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ronfit Forte | Global B2B Healthcare Product Portfolio" },
      {
        name: "description",
        content:
          "Ronfit Forte offers a structured healthcare portfolio across multiple categories — infant nutrition, paediatric, cold and flu, cough, pain relief, topical care and dermatology — for distributors and importers worldwide.",
      },
      { property: "og:title", content: "Ronfit Forte | Global B2B Healthcare Portfolio" },
      {
        property: "og:description",
        content:
          "A structured healthcare portfolio for distributors, importers, wholesalers and pharmacy networks worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl("/") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
  }),
  component: HomePage,
});

const heroSlides: HeroSlide[] = [
  {
    id: "portfolio",
    headline: (
      <>
        Trusted Healthcare.
        <br />
        Global Partnerships.
        <br />
        <span className="text-primary">Stronger Together.</span>
      </>
    ),
    copy: "Ronfit Forte presents healthcare products across multiple therapeutic categories, organised so distributors, importers, wholesalers and pharmacy networks can evaluate the range quickly and start a conversation with our team.",
    image: {
      desktop: hero.url,
      mobile: mobileHero.url,
      alt: "Ronfit Forte healthcare product range on a curved brand stage",
    },
    secondaryCta: { label: "Explore Products", category: null },
  },
  {
    id: "infant-nutrition",
    headline: "Nutrition Across Growing Stages",
    copy: "Stage-structured infant nutrition packs, presented so buyers and retail teams can guide customers to the right pack at every feeding stage.",
    image: { desktop: infantImg.url, alt: "Ronfit infant nutrition product range" },
    secondaryCta: { label: "View Category", category: "infant-nutrition" },
  },
  {
    id: "paediatric-care",
    headline: "Healthcare Solutions for Growing Years",
    copy: "Paediatric presentations packaged and named to stand apart from adult products, reducing selection errors at the shelf.",
    image: { desktop: paediatricImg.url, alt: "Ronfit paediatric care product range" },
    secondaryCta: { label: "View Category", category: "paediatric-care" },
  },
  {
    id: "cold-flu-nasal-care",
    headline: "A Structured Cold & Flu Portfolio",
    copy: "Tablets, syrups, day and night presentations and an inhaler format — a range distributors can adapt to their own market.",
    image: { desktop: coldImg.url, alt: "Ronfit cold, flu and nasal care product range" },
    secondaryCta: { label: "View Category", category: "cold-flu-nasal-care" },
  },
  {
    id: "pain-topical-care",
    headline: "Everyday Relief. Built for Global Business.",
    copy: "Pain, fever and headache presentations that form a reliable, year-round base within a wider healthcare portfolio.",
    image: { desktop: painImg.url, alt: "Ronfit pain, fever and headache product range" },
    secondaryCta: { label: "View Category", category: "pain-fever-headache" },
  },
];

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
        <h1 className="sr-only">
          Ronfit Forte — Trusted Global B2B Healthcare Product Portfolio
        </h1>
        <div aria-hidden className="brand-swoosh -z-10 hidden opacity-[0.14] lg:block" />
        <div className="container-page relative py-14 lg:py-20">
          <HeroCarousel slides={heroSlides} />
        </div>
      </section>


      {/* ---------------- Categories ---------------- */}
      <section className="container-page py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="pill-label">Portfolio</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Healthcare categories, one structured range
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each category is a distinct block within the portfolio, with its own packaging identity
            and its own page for business buyers to review.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/product-category/$slug"
              params={{ slug: c.slug }}
              className="soft-card group flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className={`relative aspect-[7/5] w-full overflow-hidden ${c.accentClass}`}>
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  width={1400}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover object-right transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-charcoal backdrop-blur-sm">
                  {c.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">{c.name}</h3>
                  <span className="mt-0.5 shrink-0 rounded-full bg-secondary p-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {c.intro}
                </p>
                <span className="mt-5 text-sm font-semibold text-primary">View category →</span>
              </div>
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
              Browse the full range of products, filter by category and shortlist the
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
                  className="mx-auto h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105 lg:h-64"
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
        <div className="max-w-2xl">
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

        <div className="lozenge-frame mt-10 lg:mt-12">
          <img
            src={lifeStages.url}
            alt="Ronfit Forte healthcare support across every life stage, from infant nutrition to adult and daily care"
            width={1400}
            height={900}
            loading="lazy"
            className="h-[20rem] w-full object-cover sm:h-[26rem] lg:h-[34rem]"
          />
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
      <section className="relative overflow-hidden bg-primary text-primary-foreground curve-top curve-bottom">
        <img
          src={globalBg.url}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="container-page relative grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
              Global business
            </p>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
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
                { t: "Portfolio breadth", d: "Products across multiple healthcare categories" },
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
                className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
              >
                Global business <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/business-partnership"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Ronak Group ---------------- */}
      <section className="relative overflow-hidden bg-secondary curve-top curve-bottom">
        <img
          src={groupBg.url}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="container-page relative grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.6fr] lg:py-24">
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
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground curve-top curve-bottom">
        <img
          src={partnershipBg.url}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-primary/20"
        />
        <div className="container-page relative grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
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
      </section>
    </main>
  );
}
