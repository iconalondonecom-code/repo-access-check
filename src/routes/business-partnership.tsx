import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { categories } from "@/lib/catalog";
import partnershipBg from "@/assets/site/ronfit-business-partnership-background.png.asset.json";

export const Route = createFileRoute("/business-partnership")({
  head: () => ({
    meta: [
      { title: "Business Partnership | Partner With Ronfit Forte" },
      {
        name: "description",
        content:
          "Partner with Ronfit Forte as a distributor, importer, wholesaler, pharmacy network or retail chain. See what we bring to a partnership and how to start the conversation.",
      },
      { property: "og:title", content: "Business Partnership | Ronfit Forte" },
      {
        property: "og:description",
        content:
          "What Ronfit Forte brings to distributor and importer partnerships, and how to begin a territory discussion.",
      },
    ],
  }),
  component: PartnershipPage,
});

const benefits = [
  {
    title: "A range you can explain in five minutes",
    body: "Seven named categories, consistent packaging and a predictable pack architecture — so your sales team can present the portfolio without a training programme.",
  },
  {
    title: "Multiple shelf positions, one supplier",
    body: "Tablets, syrups, gels, sprays, balms, lozenges and powders across the portfolio mean several listings can come from a single supplier relationship.",
  },
  {
    title: "Brand assets that stay consistent",
    body: "Product imagery and brand presentation are maintained centrally, so your local materials do not need to be rebuilt from scratch.",
  },
  {
    title: "Direct, named contact",
    body: "Partner enquiries go to a defined team rather than a general inbox, with responses tailored to your market and channel.",
  },
  {
    title: "Category-level conversations",
    body: "You can take a single category or the full range. Scope is agreed rather than imposed, which suits specialist and generalist partners alike.",
  },
  {
    title: "Backed by Ronak Group",
    body: "Group processes stand behind the brand for documentation requests, correspondence and long-term continuity.",
  },
];

function PartnershipPage() {
  return (
    <main>
      <PageHero
        eyebrow="Business partnership"
        title={
          <>
            Partner with Ronfit Forte and bring{" "}
            <span className="text-primary">trusted care</span> to more communities
          </>
        }
        intro="We work with businesses that already understand their market. Our role is to supply a coherent healthcare portfolio, present it consistently and respond quickly to what your territory actually requires."
        image={{ url: partnershipBg.url, alt: "Healthcare business partnership visual" }}
      />

      <section className="container-page py-16">
        <p className="pill-label">Why partner with us</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">
          What a Ronfit Forte partnership gives you
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-[1.75rem] border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 curve-top">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="pill-label">Scope</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Take a category or the whole portfolio
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Partners rarely need everything at once. Many begin with the categories that match
              their existing shelf sets and expand from there once the range is established.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/product-category/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {c.shortName}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-8">
            <h2 className="text-xl font-semibold text-foreground">What to include in your enquiry</h2>
            <ol className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">1. Your market.</span> The territory
                you operate in.
              </li>
              <li>
                <span className="font-semibold text-foreground">2. Your channel.</span> Pharmacy,
                modern trade, wholesale, retail chain or a combination.
              </li>
              <li>
                <span className="font-semibold text-foreground">3. Your role.</span> Distributor,
                importer, wholesaler, pharmacy network, retail chain or healthcare business.
              </li>
              <li>
                <span className="font-semibold text-foreground">4. Categories of interest.</span>{" "}
                Which parts of the portfolio you want to discuss first.
              </li>
            </ol>
            <Link
              to="/business-enquiry"
              className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Send a business enquiry
            </Link>
          </div>
        </div>
      </section>

      <EnquiryCTA heading="Ready to start the conversation?" />
    </main>
  );
}
