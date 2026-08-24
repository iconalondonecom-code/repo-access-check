import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image?: { url: string; alt: string };
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  return (
    <section className="bg-secondary">
      <div
        className={`container-page grid items-center gap-10 py-14 lg:py-20 ${
          image ? "lg:grid-cols-2" : ""
        }`}
      >
        <div>
          <p className="pill-label">{eyebrow}</p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
          {children}
        </div>
        {image ? (
          <div className="lozenge-frame">
            <img
              src={image.url}
              alt={image.alt}
              width={1200}
              height={900}
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
