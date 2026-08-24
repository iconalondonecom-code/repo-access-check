import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Ronfit Forte" },
      {
        name: "description",
        content:
          "Terms governing use of the Ronfit Forte website, including the informational nature of product content and the B2B scope of enquiries.",
      },
      { property: "og:title", content: "Terms & Conditions | Ronfit Forte" },
      {
        property: "og:description",
        content: "Terms of use for the Ronfit Forte website and business enquiries.",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "Purpose of this website",
    body: [
      `This website presents the Ronfit Forte healthcare portfolio to business audiences — distributors, importers, wholesalers, pharmacy networks, retail chains and healthcare businesses. It is not a retail store and does not sell products to consumers.`,
      "No pricing is published here. Commercial terms are agreed directly with each partner.",
    ],
  },
  {
    heading: "Product information",
    body: [
      "Product pages describe the range as presented on our packaging. They are informational and are not medical advice, a prescription, or a substitute for consulting a qualified healthcare professional.",
      "Product availability, documentation and requirements differ between territories. Nothing on this website should be read as a statement that a given product is available or approved in your market. Those matters are confirmed in direct correspondence.",
    ],
  },
  {
    heading: "Enquiries",
    body: [
      "Submitting an enquiry does not create a commercial agreement, an exclusivity arrangement or an obligation on either party. It begins a conversation. Any partnership arises only from a separate written agreement.",
      "You agree that the information you submit is accurate and that you are authorised to make the enquiry on behalf of the business you name.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      `The Ronfit Forte name, logo, packaging designs, product photography and website content are the property of ${site.parent.name} or its licensors. You may not reproduce or reuse them commercially without written permission. Approved brand and product assets are provided to partners as part of an agreed arrangement.`,
    ],
  },
  {
    heading: "External links",
    body: [
      "Where this website links to third-party sites, including group websites and messaging services, we are not responsible for their content or practices.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "This website is provided on an as-is basis. While we take care to keep the information current and accurate, we do not accept liability for decisions taken solely on the basis of website content. Business decisions should be based on the direct correspondence and documentation exchanged with our team.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "The portfolio, content and these terms may change over time. The version published on this page is the one that applies.",
    ],
  },
];

function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="These terms cover how this website may be used, the informational nature of the product content and the business-to-business scope of enquiries."
      />
      <section className="container-page max-w-3xl py-14">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold text-foreground">{s.heading}</h2>
              <div className="mt-4 space-y-4">
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)} className="text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-secondary p-6">
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-primary">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
