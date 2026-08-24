import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { insights } from "@/lib/insights";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights | Healthcare Distribution & Portfolio Articles" },
      {
        name: "description",
        content:
          "Articles on healthcare distribution, portfolio structure, packaging consistency and therapeutic category planning from the Ronfit Forte team.",
      },
      { property: "og:title", content: "Insights | Ronfit Forte" },
      {
        property: "og:description",
        content:
          "Commentary on healthcare distribution, portfolio strategy and category planning for business partners.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const [lead, ...rest] = insights;

  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes on healthcare <span className="text-primary">distribution and portfolios</span>
          </>
        }
        intro="General commentary written for business partners — how ranges are structured, how buyers evaluate them and what makes a healthcare portfolio easier to sell. No medical claims, no market statistics."
      />

      {lead ? (
        <section className="container-page py-14">
          <Link
            to="/insights/$slug"
            params={{ slug: lead.slug }}
            className="group grid gap-8 overflow-hidden rounded-[2.5rem] border border-border bg-card transition-shadow hover:shadow-lift lg:grid-cols-2"
          >
            <img
              src={lead.image}
              alt={lead.imageAlt}
              width={1200}
              height={800}
              className="h-full max-h-80 w-full object-cover"
            />
            <div className="p-8 lg:py-10 lg:pr-10">
              <span className="pill-label">{lead.topic}</span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead.excerpt}</p>
              <p className="mt-5 text-xs text-muted-foreground">{lead.dateLabel}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-primary">
                Read the article →
              </span>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="container-page pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <Link
              key={a.slug}
              to="/insights/$slug"
              params={{ slug: a.slug }}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-shadow hover:shadow-lift"
            >
              <img
                src={a.image}
                alt={a.imageAlt}
                width={800}
                height={500}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold tracking-[0.18em] text-primary">
                  {a.topic}
                </span>
                <h2 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {a.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <p className="mt-auto pt-4 text-xs text-muted-foreground">{a.dateLabel}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <EnquiryCTA />
    </main>
  );
}
