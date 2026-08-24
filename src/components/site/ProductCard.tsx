import { Link } from "@tanstack/react-router";

import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col rounded-[1.75rem] border border-border bg-card p-5 transition-shadow hover:shadow-lift"
    >
      <img
        src={product.image}
        alt={product.imageAlt}
        width={500}
        height={500}
        loading="lazy"
        className="mx-auto h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <h3 className="mt-5 text-base font-semibold text-foreground">{product.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {product.format}
      </p>
      <span className="mt-auto pt-4 text-sm font-semibold text-primary">View product →</span>
    </Link>
  );
}
