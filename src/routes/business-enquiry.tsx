import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/business-enquiry")({
  head: () => ({
    meta: [
      { title: "Business Enquiry | Contact the Ronfit Forte Partner Team" },
      {
        name: "description",
        content:
          "Send a business enquiry to Ronfit Forte. Tell us your market, channel and categories of interest and our partner team will respond with territory-relevant information.",
      },
      { property: "og:title", content: "Business Enquiry | Ronfit Forte" },
      {
        property: "og:description",
        content:
          "Start a distributor, importer or pharmacy network conversation with the Ronfit Forte partner team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://repo-scan-pal.lovable.app/business-enquiry" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://repo-scan-pal.lovable.app/business-enquiry" }],
  }),
  component: EnquiryPage,
});

function EnquiryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Business enquiry"
        title={
          <>
            Tell us your market and we will respond with{" "}
            <span className="text-primary">what is relevant to it</span>
          </>
        }
        intro="This form is for business partners — distributors, importers, wholesalers, pharmacy networks, retail chains and healthcare businesses. We do not sell to consumers and we do not publish pricing."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr]">
        <EnquiryForm idPrefix="enquiry" />

        <aside className="space-y-5">
          <div className="rounded-[2.5rem] bg-charcoal p-8 text-charcoal-foreground">
            <h2 className="text-xl font-semibold">Prefer to reach us directly?</h2>
            <dl className="mt-6 space-y-4 text-sm">
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
                <dd>
                  <a
                    href={`tel:${site.phone.replace(/\s+/g, "")}`}
                    className="font-semibold text-charcoal-foreground"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-charcoal-foreground/55">WhatsApp</dt>
                <dd>
                  <a
                    href={whatsappLink("Hello Ronfit Forte, I have a business enquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary"
                  >
                    Start a chat
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2.5rem] border border-border bg-secondary p-8">
            <h2 className="text-base font-semibold text-foreground">What happens next</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>We review your market, channel and categories of interest.</li>
              <li>We reply with the portfolio information relevant to your territory.</li>
              <li>We work through documentation and requirements with you directly.</li>
            </ol>
          </div>
        </aside>
      </section>
    </main>
  );
}
