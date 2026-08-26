<?php
/* Template Name: Search */
/**
 * Ports src/routes/search.tsx. Results are rendered entirely client-side by
 * assets/js/main.js's initSearch() (reads window.ronfitForte.productsIndex /
 * .insightsIndex, localized in inc/enqueue.php) — matches the source's
 * in-browser filter behaviour with no PHP-rendered results on first load.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Search the Ronfit Forte Portfolio & Insights',
	'description' => 'Search Ronfit Forte products by name, format or category, and find insight articles on healthcare distribution and portfolio planning.',
	'canonical'   => home_url( '/search/' ),
	'noindex'     => true,
);

get_header();
?>
<main>
<?php
ob_start();
?>
<div class="mt-8 max-w-xl">
	<label class="sr-only" for="search-input">Search</label>
	<input id="search-input" class="ronfit-search-input w-full rounded-full border border-border bg-background px-6 py-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" autofocus placeholder="Try &ldquo;syrup&rdquo;, &ldquo;cold&rdquo;, &ldquo;gel&rdquo; or &ldquo;distribution&rdquo;">
</div>
<?php
$hero_children = ob_get_clean();

ronfit_page_hero( array(
	'eyebrow'  => 'Search',
	'title'    => 'Find a product or article',
	'intro'    => 'Search across the full product portfolio and the insights library.',
	'children' => $hero_children,
) );
?>

<section class="container-page py-14">
	<p class="ronfit-search-summary text-sm text-muted-foreground"></p>
	<p class="ronfit-search-empty-hint text-sm text-muted-foreground">Enter a search term above to see matching products and articles.</p>
	<div class="ronfit-search-results mt-10"></div>
</section>

<?php ronfit_enquiry_cta(); ?>
</main>
<?php get_footer(); ?>
