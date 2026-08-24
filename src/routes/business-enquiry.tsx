import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { categories } from "@/lib/catalog";
import { businessTypes, site, whatsappLink } from "@/lib/site";

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
    ],
  }),
  component: EnquiryPage,
});

const field =
  "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
const label = "text-sm font-semibold text-foreground";

function EnquiryPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    businessType: "",
    category: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const summary = [
    `Business enquiry — Ronfit Forte`,
    form.name && `Name: ${form.name}`,
    form.company && `Company: ${form.company}`,
    form.email && `Email: ${form.email}`,
    form.phone && `Phone: ${form.phone}`,
    form.country && `Country / market: ${form.country}`,
    form.businessType && `Business type: ${form.businessType}`,
    form.category && `Category of interest: ${form.category}`,
    form.message && `Message: ${form.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Business enquiry${form.country ? ` — ${form.country}` : ""}`,
  )}&body=${encodeURIComponent(summary)}`;

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

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="rounded-[2rem] border border-border bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                required
                className={field}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => set("name")(e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="company">
                Company
              </label>
              <input
                id="company"
                required
                className={field}
                placeholder="Company name"
                value={form.company}
                onChange={(e) => set("company")(e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="email">
                Business email
              </label>
              <input
                id="email"
                type="email"
                required
                className={field}
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => set("email")(e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="phone">
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                className={field}
                placeholder="Include country code"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="country">
                Country / market
              </label>
              <input
                id="country"
                required
                className={field}
                placeholder="Territory you operate in"
                value={form.country}
                onChange={(e) => set("country")(e.target.value)}
              />
            </div>
            <div>
              <label className={label} htmlFor="businessType">
                Business type
              </label>
              <select
                id="businessType"
                required
                className={field}
                value={form.businessType}
                onChange={(e) => set("businessType")(e.target.value)}
              >
                <option value="">Select business type</option>
                {businessTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="category">
                Category of interest
              </label>
              <select
                id="category"
                className={field}
                value={form.category}
                onChange={(e) => set("category")(e.target.value)}
              >
                <option value="">Any / whole portfolio</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="message">
                Your enquiry
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className={field}
                placeholder="Channels you serve, volumes you typically handle, and what you would like from us first."
                value={form.message}
                onChange={(e) => set("message")(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Send enquiry
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Submitting opens your email client with the details prefilled, addressed to{" "}
            {site.email}.
          </p>
        </form>

        <aside className="space-y-5">
          <div className="rounded-[2rem] bg-charcoal p-8 text-charcoal-foreground">
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
                <dd className="font-semibold">{site.phone}</dd>
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

          <div className="rounded-[2rem] border border-border bg-secondary p-8">
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
