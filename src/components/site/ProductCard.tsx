import { Link } from "@tanstack/react-router";

import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col rounded-[2.5rem] bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-secondary/60 p-4">
        <span
          aria-hidden
          className="absolute -right-10 -top-10 size-28 rounded-full bg-primary/10 blur-2xl"
        />
        <img
          src={product.image}
          alt={product.imageAlt}
          width={800}
          height={800}
          loading="lazy"
          className="relative h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.07] sm:h-64 lg:h-72"
        />
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-snug text-foreground">{product.name}</h3>
      <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {product.format}
      </p>
      <span className="mt-auto pt-5 text-sm font-semibold text-primary">View product →</span>
    </Link>
  );
}
