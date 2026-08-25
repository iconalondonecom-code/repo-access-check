import { useState } from "react";

import { categories } from "@/lib/catalog";
import { businessTypes, site } from "@/lib/site";

const field =
  "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
const label = "text-sm font-semibold text-foreground";

/**
 * Business enquiry form. Submitting composes a structured mailto so the
 * enquiry arrives with market, channel and category context.
 * Shared by /business-enquiry and /contact.
 */
export function EnquiryForm({ idPrefix = "enq" }: { idPrefix?: string }) {
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

  const id = (name: string) => `${idPrefix}-${name}`;

  const summary = [
    "Business enquiry — Ronfit Forte",
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
    <form
      className="rounded-[2.5rem] bg-card p-8 shadow-soft sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={id("name")}>
            Full name
          </label>
          <input
            id={id("name")}
            required
            className={field}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
          />
        </div>
        <div>
          <label className={label} htmlFor={id("company")}>
            Company
          </label>
          <input
            id={id("company")}
            required
            className={field}
            placeholder="Company name"
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
          />
        </div>
        <div>
          <label className={label} htmlFor={id("email")}>
            Business email
          </label>
          <input
            id={id("email")}
            type="email"
            required
            className={field}
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
          />
        </div>
        <div>
          <label className={label} htmlFor={id("phone")}>
            Phone / WhatsApp
          </label>
          <input
            id={id("phone")}
            className={field}
            placeholder="Include country code"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
          />
        </div>
        <div>
          <label className={label} htmlFor={id("country")}>
            Country / market
          </label>
          <input
            id={id("country")}
            required
            className={field}
            placeholder="Territory you operate in"
            value={form.country}
            onChange={(e) => set("country")(e.target.value)}
          />
        </div>
        <div>
          <label className={label} htmlFor={id("businessType")}>
            Business type
          </label>
          <select
            id={id("businessType")}
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
          <label className={label} htmlFor={id("category")}>
            Category of interest
          </label>
          <select
            id={id("category")}
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
          <label className={label} htmlFor={id("message")}>
            Your enquiry
          </label>
          <textarea
            id={id("message")}
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
        className="mt-8 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
      >
        Send enquiry
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Submitting opens your email client with the details prefilled, addressed to {site.email}.
      </p>
    </form>
  );
}
