import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { canonicalUrl, site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ronfit Forte" },
      {
        name: "description",
        content:
          "How Ronfit Forte handles the information submitted through business enquiries, what we collect, how it is used and how to request removal.",
      },
      { property: "og:title", content: "Privacy Policy | Ronfit Forte" },
      {
        property: "og:description",
        content: "How Ronfit Forte handles business enquiry information.",
      },
      { property: "og:url", content: canonicalUrl("/privacy-policy") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/privacy-policy") }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "Information we collect",
    body: [
      "This website collects information only when you choose to send it to us. That means the details you enter into the business enquiry form — your name, company, business email, phone number, country or market, business type, category of interest and your message.",
      "We do not ask for or want sensitive personal information, health information or payment details through this website.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "Enquiry details are used to respond to your enquiry and to continue the business conversation you have started. That may include sending portfolio information relevant to your territory, discussing documentation requirements or arranging a call.",
      "We do not sell enquiry information, and we do not add enquirers to unrelated marketing lists.",
    ],
  },
  {
    heading: "Who can see it",
    body: [
      `Enquiries are received by the ${site.parent.name} team responsible for Ronfit Forte business partnerships. Access is limited to colleagues who need it in order to reply to you or to progress the discussion.`,
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Business correspondence is retained for as long as the commercial relationship or discussion remains relevant, and afterwards only where a record is needed for legitimate business or legal reasons.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This website is designed to work without advertising trackers. Where basic analytics or hosting logs are used, they exist to keep the site working and to understand aggregate usage — not to profile individuals.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      `You can ask us what enquiry information we hold about you, ask for corrections, or ask us to delete it. Write to ${site.email} and we will action reasonable requests.`,
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If our practices change, this page will be updated. Material changes will be reflected here rather than communicated individually.",
    ],
  },
];

function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains what happens to the information you send us through this website. It is written plainly because it needs to be understood, not just published."
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
              Questions about this policy can be sent to{" "}
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
