import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ronfit Forte | Business Enquiry, Email, Phone & WhatsApp" },
      {
        name: "description",
        content:
          "Contact the Ronfit Forte partner team: send the business enquiry form, or reach us by email, phone or WhatsApp. Office in Vadodara, Gujarat, India.",
      },
      { property: "og:title", content: "Contact Ronfit Forte" },
      {
        property: "og:description",
        content:
          "Business enquiry form plus email, phone and WhatsApp contact for the Ronfit Forte partner team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://repo-scan-pal.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://repo-scan-pal.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to the <span className="text-primary">Ronfit Forte</span> team
          </>
        }
        intro="For portfolio, partnership or documentation questions, use the business enquiry form below or reach us directly by email, phone or WhatsApp."
      />

      <section className="container-page grid gap-5 py-14 sm:grid-cols-3">
        <a
          href={`mailto:${site.email}`}
          className="group rounded-[2.5rem] bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-primary">
            <Mail className="size-5" aria-hidden />
          </span>
          <h2 className="mt-5 text-lg font-semibold text-foreground">Email</h2>
          <p className="mt-2 text-sm font-semibold text-primary">{site.email}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The fastest route for portfolio and partnership questions.
          </p>
        </a>

        <a
          href={`tel:${site.phone.replace(/\s+/g, "")}`}
          className="group rounded-[2.5rem] bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-primary">
            <Phone className="size-5" aria-hidden />
          </span>
          <h2 className="mt-5 text-lg font-semibold text-foreground">Phone</h2>
          <p className="mt-2 text-sm font-semibold text-primary">{site.phone}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Available during business hours.
          </p>
        </a>

        <a
          href={whatsappLink("Hello Ronfit Forte, I would like to get in touch.")}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-[2.5rem] bg-card p-8 shadow-soft transition-transform hover:-translate-y-1"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-primary">
            <MessageCircle className="size-5" aria-hidden />
          </span>
          <h2 className="mt-5 text-lg font-semibold text-foreground">WhatsApp</h2>
          <p className="mt-2 text-sm font-semibold text-primary">Start a chat</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Convenient for partners in different time zones.
          </p>
        </a>
      </section>

      <section className="bg-secondary py-16 curve-top lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <p className="pill-label">Business enquiry</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Send your enquiry
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              If you are a distributor, importer, wholesaler, pharmacy network or retail chain, this
              form captures the details we need to reply usefully — your market, channel and
              categories of interest.
            </p>
            <div className="mt-8">
              <EnquiryForm idPrefix="contact" />
            </div>
          </div>

          <div className="lg:pt-24">
            <div className="rounded-[2.5rem] bg-card p-8 shadow-soft">
              <p className="pill-label">Office</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {site.parent.name}
              </h2>
              <address className="mt-5 not-italic text-base leading-relaxed text-muted-foreground">
                {site.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
                <span className="block">
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </span>
                <span className="block">{site.address.country}</span>
              </address>
              <a
                href={site.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-semibold text-primary"
              >
                {site.parent.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
