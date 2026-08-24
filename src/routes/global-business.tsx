import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { businessTypes } from "@/lib/site";
import globalBg from "@/assets/site/ronfit-global-business-background.png.asset.json";

export const Route = createFileRoute("/global-business")({
  head: () => ({
    meta: [
      { title: "Global Business | Ronfit Forte Healthcare Exports" },
      {
        name: "description",
        content:
          "Ronfit Forte works with distributors, importers, wholesalers and pharmacy networks internationally. Learn how we structure partner conversations and territory discussions.",
      },
      { property: "og:title", content: "Global Business | Ronfit Forte" },
      {
        property: "og:description",
        content:
          "How Ronfit Forte approaches international partner conversations with distributors, importers and pharmacy networks.",
      },
    ],
  }),
  component: GlobalBusinessPage,
});

const steps = [
  {
    step: "01",
    title: "You tell us your market and channel",
    body: "An enquiry that names the territory, the channel you serve and the categories you are interested in lets us respond substantively rather than with clarifying questions.",
  },
  {
    step: "02",
    title: "We assess portfolio fit",
    body: "We review which categories and formats match your channel, and identify where the range is strongest for your type of business.",
  },
  {
    step: "03",
    title: "We discuss territory requirements",
    body: "Documentation, product requirements and availability differ by market. We work through these with you directly rather than publishing market-specific claims.",
  },
  {
    step: "04",
    title: "We agree a working structure",
    body: "Once fit and requirements are clear, we move to a practical arrangement — category scope, presentation materials and a named point of contact.",
  },
];

function GlobalBusinessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Global business"
        title={
          <>
            Built for <span className="text-primary">international partner</span> conversations
          </>
        }
        intro="Ronfit Forte is a B2B healthcare brand. We do not sell direct to consumers and we do not publish pricing. Our work is with businesses that distribute, import and retail healthcare products in their own markets."
        image={{ url: globalBg.url, alt: "International healthcare business network visual" }}
      />

      <section className="container-page py-16">
        <p className="pill-label">Who we work with</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">
          Partner types we are set up to support
        </h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-border bg-card px-6 py-5 text-sm font-semibold text-foreground"
            >
              {t}
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Each of these business types needs something slightly different from a supplier — an
          importer works to different timelines than a pharmacy network, and a retail chain plans
          around shelf sets rather than order files. Telling us your role in your first message lets
          us start in the right place.
        </p>
      </section>

      <section className="bg-secondary py-16 curve-top">
        <div className="container-page">
          <p className="pill-label">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            From first enquiry to a working arrangement
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.step} className="rounded-[1.75rem] border border-border bg-card p-7">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="max-w-3xl">
          <p className="pill-label">What we do not publish</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Territory information belongs in a conversation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We do not list countries served, market statistics, certifications or facility claims on
            this website. Requirements, documentation and product availability vary between
            territories, and publishing generalised statements would be misleading to the partners we
            are trying to help.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Instead, we respond to each enquiry with the information relevant to that market. It is a
            slower way to build a website and a faster way to build a working relationship.
          </p>
        </div>
      </section>

      <EnquiryCTA heading="Discuss your market with our team" />
    </main>
  );
}
