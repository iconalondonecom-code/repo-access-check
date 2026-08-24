import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ronfit Forte | Partner Enquiries & Office Details" },
      {
        name: "description",
        content:
          "Contact the Ronfit Forte team by email, phone or WhatsApp, or write to our office in Vadodara, Gujarat, India. Business partner enquiries welcome.",
      },
      { property: "og:title", content: "Contact Ronfit Forte" },
      {
        property: "og:description",
        content: "Email, phone, WhatsApp and office details for the Ronfit Forte partner team.",
      },
    ],
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
        intro="For portfolio, partnership or documentation questions, reach us on any of the channels below. Business enquiries are best sent through the enquiry form so we have your market and channel from the start."
      />

      <section className="container-page grid gap-5 py-14 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-border bg-card p-8">
          <h2 className="text-lg font-semibold text-foreground">Email</h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 block text-sm font-semibold text-primary"
          >
            {site.email}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The fastest route for portfolio and partnership questions.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-8">
          <h2 className="text-lg font-semibold text-foreground">Phone</h2>
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="mt-3 block text-sm font-semibold text-primary"
          >
            {site.phone}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Available during Indian business hours.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-8">
          <h2 className="text-lg font-semibold text-foreground">WhatsApp</h2>
          <a
            href={whatsappLink("Hello Ronfit Forte, I would like to get in touch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm font-semibold text-primary"
          >
            Start a chat
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Convenient for partners in different time zones.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16 curve-top">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="pill-label">Office</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
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

          <div className="rounded-[2rem] bg-charcoal p-8 text-charcoal-foreground">
            <h2 className="text-xl font-semibold">Business partner enquiries</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-foreground/75">
              If you are a distributor, importer, wholesaler, pharmacy network or retail chain, the
              enquiry form captures the details we need to reply usefully — your market, channel and
              categories of interest.
            </p>
            <Link
              to="/business-enquiry"
              className="mt-7 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Send a business enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
