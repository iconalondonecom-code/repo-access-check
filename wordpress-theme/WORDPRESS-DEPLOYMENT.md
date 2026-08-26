# Ronfit Forte — WordPress Theme Deployment Guide

This folder contains a complete, installable WordPress theme (`ronfit-forte/`) that reproduces the live Ronfit Forte site (the React/Vite app in this repo's `src/` and `public/` folders) as closely as technically possible in plain WordPress. **The React/Vite site is untouched by this — it keeps deploying to GitHub Pages exactly as before.** This theme is for a separate WordPress installation.

## 1. Requirements

- WordPress 6.0+
- PHP 7.4+
- No plugins are required. The theme does not depend on ACF, Elementor, WooCommerce, or any page builder.

## 2. Install and activate

1. `ronfit-forte-final.zip` is already built in this folder (it contains the `ronfit-forte/` theme directory at its root, ready to install).
2. **Note on file size:** the ZIP is roughly 100MB, almost entirely the original product photography carried over unchanged from the source site (several of the packaging photos are multi-megabyte PNGs). Some hosts cap wp-admin's theme upload at a much smaller size (`upload_max_filesize`/`post_max_size` in PHP). If **Appearance → Themes → Add New → Upload Theme** rejects the file as too large, unzip it locally and upload the resulting `ronfit-forte/` folder to `wp-content/themes/ronfit-forte/` via SFTP/FTP instead — functionally identical, just a different upload path.
3. In wp-admin: **Appearance → Themes → Add New → Upload Theme**, choose `ronfit-forte-final.zip`, click **Install Now**, then **Activate**. (Or, if you used the FTP method above, the theme will already appear in **Appearance → Themes** — just click **Activate**.)
4. Activation automatically:
   - Creates the site's core pages (Home, About, Products, Global Business, Business Partnership, Contact, Business Enquiry, Privacy Policy, Terms & Conditions, Search, Insights) and assigns each its correct template.
   - Sets **Home** as the static front page and **Insights** as the "Posts page" (Settings → Reading is pre-configured for you).
   - Seeds the 12 original Insights articles as real, published Posts (idempotent — re-activating the theme won't duplicate or overwrite them once they exist).
   - Creates a default "Primary Navigation" menu matching the original site and assigns it to the header.
   - Flushes rewrite rules so `/products/{slug}/`, `/product-category/{slug}/` and `/insights/{slug}/` all resolve immediately.

## 3. One thing to double-check after activating

Go to **Settings → Permalinks** and click **Save Changes** once (no need to change anything) — this is a standard WordPress safety step that guarantees the custom URL rules registered by the theme are fully flushed, even though activation already does this automatically in most environments.

## 4. Update the domain in two files

The theme ships with placeholder/example values for anything that must reference the site's public domain:

- `wordpress-theme/sitemap-template.xml` — replace every `https://www.example.com` with your real domain, then upload the result as `/sitemap.xml` at your site's root and submit it in Google Search Console / Bing Webmaster Tools. WordPress's own built-in sitemap at `/wp-sitemap.xml` also works automatically and needs no changes — it already uses your real domain because it's generated live from `home_url()`.
- `robots.txt` is generated dynamically by the theme (via the `robots_txt` filter in `functions.php`) and already points at `{your domain}/sitemap.xml` — no manual edit needed there.

## 5. Menus

**Appearance → Menus** shows a "Primary Navigation" menu (auto-created on activation) assigned to the **Primary Navigation** location. Edit, reorder, or add items there any time — the header re-renders whatever is assigned to that location. The "Products" mega-menu (the 7 category tiles under Home/About/Products/...) and the footer's category list are intentionally NOT part of this menu — they reflect the fixed product catalogue and update automatically if you ever change `inc/data-catalog.php`.

## 6. Products & categories (not editable in wp-admin, by design)

Per the agreed approach, the 34 products and 7 categories are static PHP data in `wordpress-theme/ronfit-forte/inc/data-catalog.php` — not a custom post type. This guarantees pixel-perfect, drift-free parity with the original site. To change a product's copy, image, or category, edit that file directly (each entry is clearly commented and mirrors `src/lib/catalog.ts` in the React app).

Product/category images live in `wordpress-theme/ronfit-forte/assets/images/products/` and `.../assets/images/site/`.

## 7. Insights / blog (fully editable)

Unlike products, Insights are real, native WordPress Posts — write, edit, and publish them from **Posts → Add New** exactly like any WordPress blog. A few notes on how the theme adapts the original design to native Posts:

- **Topic tag** (the small label above each article title) comes from the post's first assigned Category. Assign a Category to each new post (e.g. "Distribution", "Category insight") to control this.
- **Featured image** is used for both the article hero and its card thumbnail. Always set a Featured Image on new posts — if one is missing, the theme falls back to the default Open Graph image so nothing ever looks broken.
- Article URLs are `/insights/{slug}/` automatically (handled by a rewrite rule + permalink filter in `inc/rewrites.php`) — you do not need to configure this per post.

## 8. WhatsApp & Business Enquiry

- The floating WhatsApp button (bottom-right, every page) and the "Business Enquiry"/"Chat on WhatsApp" links throughout the site use the phone number, WhatsApp number and email defined as constants in `wordpress-theme/ronfit-forte/inc/config.php` (`RONFIT_PHONE`, `RONFIT_WHATSAPP`, `RONFIT_EMAIL`). Update these three constants if contact details ever change — every button across the site updates automatically.
- The Business Enquiry / Contact forms do **not** submit to a server (matching the original site exactly): submitting opens the visitor's email client with a pre-filled message addressed to `RONFIT_EMAIL`. This is intentional, not a bug — if you'd prefer a real server-side mailer in the future, that's a small, separate enhancement (e.g. wiring the existing form markup to `wp_mail()` via a REST endpoint or a plugin like WPForms/Contact Form 7).

## 9. SEO, schema.org, and Open Graph

Every page sets its own `<title>`, meta description, canonical URL, and Open Graph tags (see `inc/seo.php`). Structured data (JSON-LD) is included site-wide:

- **Organization** schema on every page.
- **BreadcrumbList** on category, product, and article pages.
- **Product** schema on every product page.
- **Article** schema on every Insight post.

If you later install a dedicated SEO plugin (Yoast, RankMath, etc.), be aware it will likely add its own `<title>`/meta tags alongside the theme's — for a single clean source of truth, either skip installing one, or ask a developer to gate the theme's own output behind `!defined('WPSEO_VERSION')`-style checks first.

## 10. What was verified — and what wasn't

This theme was built and reviewed entirely through careful, line-by-line code review against the original React source, with the exact compiled CSS extracted from a real production build (`npm run build`) so the visual styling is byte-for-byte the original stylesheet, not a hand re-creation. Every one of the 62 URLs on the live site has a corresponding WordPress template. A full repository grep confirms there are no leftover "KNA" references, no localhost URLs, and no old GitHub Pages domain references anywhere in the theme.

**However:** this environment had no PHP interpreter or WordPress installation available, so the theme could not be executed, installed, or visually tested end-to-end before delivery. There is a meaningful chance of a small PHP notice/warning or a minor markup slip surfacing only once real WordPress runs it. Before pointing a production domain at this theme:

1. Install it on a staging site or a local environment (e.g. LocalWP, XAMPP, or a low-cost staging host).
2. Enable `WP_DEBUG` / `WP_DEBUG_LOG` temporarily and click through all page types: home, about, a product, a category, the products index (test the filter buttons), search (type a query), an Insights article, and the two legal pages.
3. Check the browser console for JS errors and confirm the hero carousel autoplays, the mobile menu opens, and the WhatsApp/enquiry buttons work.

If anything looks off, it's almost certainly a small, quick fix rather than a structural problem — the architecture and content are complete.

## 11. Theme file map (for future maintenance)

```
ronfit-forte/
  style.css                 WP theme header (required metadata only — real styles are enqueued separately)
  functions.php              Loads everything below + activation setup (pages, menu, insights seed, rewrites)
  header.php / footer.php    Site header/footer, matching SiteHeader.tsx / SiteFooter.tsx
  front-page.php             Homepage (hero carousel + all sections)
  home.php                   Insights index ("Posts page")
  single.php                 Single Insight article
  404.php                    Not-found page
  page.php                   Generic fallback (rarely used — every real page has its own template)
  page-templates/            One file per static page (About, Contact, Products, Search, legal pages, etc.)
  template-product-single.php, template-product-category.php   "Virtual" routes for /products/{slug}/ and /product-category/{slug}/
  inc/
    config.php               Brand constants (phone, email, WhatsApp, address)
    data-catalog.php          The 34 products + 7 categories (static data)
    rewrites.php              Custom URL routing for products/categories/insights
    nav-menus.php             Menu registration + default menu seeding
    seo.php                   Meta tags, Open Graph, JSON-LD schema helpers
    enqueue.php                Asset loading (CSS/JS/fonts) + search index data
    template-tags.php          Shared markup functions (hero carousel, product card, forms, etc.)
    seed-insights.php          One-time seeding of the 12 original Insights articles as Posts
  assets/
    css/main.css              Compiled stylesheet (extracted verbatim from the real site build)
    js/main.js                 All interactivity (menus, carousel, forms, filters, search)
    js/vendor/                 The same embla-carousel library the original site uses
    images/products/, images/site/    All product and site photography
```
