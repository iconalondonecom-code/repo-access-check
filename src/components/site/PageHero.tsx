import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: { url: string; alt: string };
  /** "split" keeps text and image side by side; "banner" uses the image as a large full-width background. */
  variant?: "split" | "banner";
  /**
   * Banner image framing. "cover" (default) fills the banner, cropping as
   * needed. "right" anchors the image at its natural aspect ratio to the
   * right edge with zero cropping — for source images composed with empty
   * space on the left and the product cluster on the right, so nothing is
   * ever cropped out; the charcoal background/gradient shows through on the
   * left instead.
   */
  imageAlign?: "cover" | "right";
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  variant = "split",
  imageAlign = "cover",
  children,
}: PageHeroProps) {
  if (image && variant === "banner") {
    return (
      <section className="relative isolate overflow-hidden curve-bottom bg-charcoal">
        <img
          src={image.url}
          alt={image.alt}
          width={2000}
          height={1000}
          className={
            imageAlign === "right"
              ? "absolute inset-y-0 right-0 h-full w-auto max-w-none object-contain"
              : "absolute inset-0 size-full object-cover"
          }
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/75 to-charcoal/25"
        />
        <div
          aria-hidden
          className="absolute -left-24 bottom-[-40%] h-[36rem] w-[46rem] rounded-[50%] bg-primary/30 blur-3xl"
        />
        <div className="container-page relative flex min-h-[26rem] flex-col justify-center py-20 lg:min-h-[34rem] lg:py-28">
          <p className="inline-block w-fit rounded-full bg-primary px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-charcoal-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-foreground/80">
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-secondary curve-bottom">
      <div
        aria-hidden
        className="absolute -right-32 -top-40 size-[38rem] rounded-[50%] bg-primary/10 blur-3xl"
      />
      <div
        className={`container-page relative grid items-center gap-12 py-16 lg:py-24 ${
          image ? "lg:grid-cols-[0.95fr_1.05fr]" : ""
        }`}
      >
        <div>
          <p className="pill-label">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
          {children}
        </div>
        {image ? (
          <div className="lozenge-frame">
            <img
              src={image.url}
              alt={image.alt}
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string; params?: never }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        {trail.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {i < trail.length - 1 ? <span aria-hidden>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
