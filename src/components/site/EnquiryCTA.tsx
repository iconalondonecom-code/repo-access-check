import { Link } from "@tanstack/react-router";

import { site, whatsappLink } from "@/lib/site";

export function EnquiryCTA({
  heading = "Let's build a healthier tomorrow, together",
  body = "Join hands with Ronfit Forte and bring trusted healthcare products to more communities. Tell us your market and channel and our team will respond with the information relevant to your territory.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="container-page py-16">
      <div className="grid gap-8 rounded-[2.5rem] bg-charcoal p-9 text-charcoal-foreground lg:grid-cols-[1.2fr_1fr] lg:p-12">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{heading}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal-foreground/75">
            {body}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <Link
            to="/business-enquiry"
            className="rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Send a Business Enquiry
          </Link>
          <a
            href={whatsappLink("Hello Ronfit Forte, I would like to discuss a business enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-charcoal-foreground/25 px-7 py-3.5 text-center text-sm font-semibold text-charcoal-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Chat on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-center text-xs text-charcoal-foreground/60 transition-colors hover:text-primary"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
