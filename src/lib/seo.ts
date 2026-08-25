/**
 * Structured data (JSON-LD) helpers.
 *
 * Every field here maps to information already stated elsewhere on the site
 * (catalog/insights data, site.ts). Nothing is invented — no ratings,
 * offers/pricing, certifications or manufacturing/market claims.
 */
import { absoluteAsset, canonicalUrl, site } from "@/lib/site";
import { logo } from "@/lib/assets";
import type { Product, Category } from "@/lib/catalog";
import type { Insight } from "@/lib/insights";

const logoUrl = absoluteAsset(logo.url);

const asScriptTag = (schema: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify(schema),
});

export const organizationSchema = () =>
  asScriptTag({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: canonicalUrl("/"),
    logo: logoUrl,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.lines.join(", "),
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    parentOrganization: {
      "@type": "Organization",
      name: site.parent.name,
      url: site.parent.url,
    },
  });

export const breadcrumbSchema = (items: { label: string; path?: string }[]) =>
  asScriptTag({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.path ? { item: canonicalUrl(item.path) } : {}),
    })),
  });

export const productSchema = (product: Product, category: Category) =>
  asScriptTag({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: absoluteAsset(product.image),
    category: category.name,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    url: canonicalUrl(`/products/${product.slug}`),
  });

export const articleSchema = (insight: Insight) =>
  asScriptTag({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    image: absoluteAsset(insight.image),
    datePublished: insight.date,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    mainEntityOfPage: canonicalUrl(`/insights/${insight.slug}`),
  });
