import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/site/PageHero";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { getInsight, relatedInsights } from "@/lib/insights";
import { absoluteAsset, canonicalUrl } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = getInsight(params.slug);
    if (!insight) throw notFound();
    return { insight };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.insight.seoTitle },
          { name: "description", content: loaderData.insight.seoDescription },
          { property: "og:title", content: loaderData.insight.seoTitle },
          { property: "og:description", content: loaderData.insight.seoDescription },
          { property: "og:type", content: "article" },
          { property: "article:published_time", content: loaderData.insight.date },
          {
            property: "og:url",
            content: canonicalUrl(`/insights/${loaderData.insight.slug}`),
          },
          { property: "og:image", content: absoluteAsset(loaderData.insight.image) },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: canonicalUrl(`/insights/${loaderData.insight.slug}`) }]
      : [],
    scripts: loaderData
      ? [
          articleSchema(loaderData.insight),
          breadcrumbSchema([
            { label: "Home", path: "/" },
            { label: "Insights", path: "/insights" },
            { label: loaderData.insight.title },
          ]),
        ]
      : [],
  }),
  component: InsightPage,
});

function InsightPage() {
  const { insight } = Route.useLoaderData();
  const related = relatedInsights(insight.slug, 3);

  return (
    <main>
      <Breadcrumbs
        trail={[
          { label: "Home", to: "/" },
          { label: "Insights", to: "/insights" },
          { label: insight.title },
        ]}
      />

      <article className="container-page py-10">
        <div className="max-w-3xl">
          <span className="pill-label">{insight.topic}</span>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {insight.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            <time dateTime={insight.date}>{insight.dateLabel}</time>
          </p>
        </div>

        <div className="lozenge-frame mt-10 max-h-[28rem]">
          <img
            src={insight.image}
            alt={insight.imageAlt}
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-10 max-w-3xl space-y-5">
          {insight.body.map((p) => (
            <p key={p.slice(0, 32)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </article>

      {related.length > 0 ? (
        <section className="bg-secondary py-16 curve-top">
          <div className="container-page">
            <p className="pill-label">More insights</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
                  className="rounded-[1.75rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
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
        </section>
      ) : null}

      <EnquiryCTA />
    </main>
  );
}
