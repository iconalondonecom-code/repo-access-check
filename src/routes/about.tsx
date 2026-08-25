import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { categories, products } from "@/lib/catalog";
import { canonicalUrl, site } from "@/lib/site";
import { brandStory, lifeStages, groupBg } from "@/lib/assets";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ronfit Forte | A Healthcare Brand of Ronak Group" },
      {
        name: "description",
        content:
          "Ronfit Forte is the healthcare brand of Ronak Group, presenting a structured seven-category portfolio to distributors, importers and pharmacy networks worldwide.",
      },
      { property: "og:title", content: "About Ronfit Forte | A Brand of Ronak Group" },
      {
        property: "og:description",
        content:
          "How Ronfit Forte structures its healthcare portfolio and works with international business partners.",
      },
      { property: "og:url", content: canonicalUrl("/about") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/about") }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Clarity first",
    body: "Every product sits in a named category with consistent packaging, so a partner can understand the range without a briefing call.",
  },
  {
    title: "Say only what is confirmed",
    body: "We publish what appears on our packaging and nothing beyond it. Regulatory detail, documentation and availability are handled partner by partner.",
  },
  {
    title: "One point of contact",
    body: "Enquiries reach a named team rather than a queue, so partners get territory-relevant answers instead of generic brochures.",
  },
  {
    title: "Built to be presented",
    body: "The portfolio is designed to be merchandised — as category blocks, stage sequences and format families that make sense on a shelf.",
  },
];

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={
          <>
            A healthcare brand built to be <span className="text-primary">partnered with</span>
          </>
        }
        intro={`Ronfit Forte is the healthcare brand of ${site.parent.name}, based in ${site.address.city}, ${site.address.country}. The portfolio spans ${products.length} products across ${categories.length} categories and is presented for international business partners rather than direct consumer sale.`}
        image={{ url: brandStory.url, alt: "Ronfit Forte brand and packaging system" }}
        variant="banner"
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="pill-label">Our approach</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            A portfolio organised the way buyers think
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Healthcare buyers work in categories: infant nutrition, paediatric care, cold and flu,
            cough and throat, pain and fever, topical relief, skin care. Ronfit Forte is structured
            the same way, so a distributor can map the range onto the shelf sets and buyer
            conversations they already have.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Within each category, products share a pack architecture. The differentiating element —
            a stage number, a strength, a format — sits in a predictable position, which helps
            retail teams recommend confidently and helps partners present the range as a block.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We deliberately keep market-specific information out of the website. Requirements differ
            by territory, so those details belong in a direct conversation with each partner.
          </p>
        </div>
        <div className="lozenge-frame">
          <img
            src={lifeStages.url}
            alt="Healthcare products supporting every stage of life"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-secondary py-16 curve-top">
        <div className="container-page">
          <p className="pill-label">What we hold to</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Four commitments that shape how we work
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-[1.75rem] border border-border bg-card p-7">
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lozenge-frame">
            <img
              src={groupBg.url}
              alt={`${site.parent.name} corporate visual`}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="pill-label">A brand of</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              {site.parent.name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Ronfit Forte operates as the healthcare brand within {site.parent.name}. For partners,
              group backing means settled processes for documentation requests, brand assets and
              commercial correspondence, and a defined owner for the relationship.
            </p>
            <a
              href={site.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Visit {site.parent.label}
            </a>
          </div>
        </div>
      </section>

      <section className="container-page pb-4">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/products"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Explore the portfolio
          </Link>
          <Link
            to="/global-business"
            className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Global business
          </Link>
        </div>
      </section>

      <EnquiryCTA />
    </main>
  );
}
