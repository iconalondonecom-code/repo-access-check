<?php
/* Template Name: Products */
/**
 * Ports src/routes/products/index.tsx.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Healthcare Product Portfolio | Ronfit Forte',
	'description' => 'Browse the complete Ronfit Forte healthcare portfolio across multiple categories — infant nutrition, paediatric, cold and flu, cough, pain relief, topical care and dermatology.',
	'canonical'   => home_url( '/products/' ),
);

get_header();

$categories     = ronfit_categories();
$all_products   = array_values( ronfit_products() );
$product_count  = count( $all_products );
?>
<main>
	<?php ronfit_page_hero( array(
		'eyebrow' => 'Portfolio',
		'title'   => 'The complete Ronfit Forte product range',
		'intro'   => 'Products across multiple healthcare categories, presented for distributors, importers, wholesalers, pharmacy networks and retail chains. No pricing is published — commercial terms are discussed directly with each partner.',
	) ); ?>

	<section class="container-page py-14">
		<div class="ronfit-products-filter flex flex-wrap gap-2" role="group" aria-label="Filter by category">
			<button type="button" data-category-filter="all" aria-pressed="true" class="rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors border-primary bg-primary text-primary-foreground">All products</button>
			<?php foreach ( $categories as $c ) : ?>
				<button type="button" data-category-filter="<?php echo esc_attr( $c['slug'] ); ?>" aria-pressed="false" class="rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"><?php echo esc_html( $c['short_name'] ); ?></button>
			<?php endforeach; ?>
		</div>

		<p class="ronfit-products-count mt-6 text-sm text-muted-foreground">Showing <?php echo (int) $product_count; ?> product<?php echo 1 === $product_count ? '' : 's'; ?></p>

		<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<?php foreach ( $all_products as $p ) : ?>
				<?php ronfit_product_card( $p, 'data-product-category="' . esc_attr( $p['category'] ) . '"' ); ?>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="bg-secondary py-16 curve-top">
		<div class="container-page">
			<p class="pill-label">Browse by category</p>
			<h2 class="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Category pages</h2>
			<div class="mt-8 flex flex-wrap gap-3">
				<?php foreach ( $categories as $c ) : ?>
					<a href="<?php echo esc_url( home_url( '/product-category/' . $c['slug'] . '/' ) ); ?>" class="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"><?php echo esc_html( $c['name'] ); ?></a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<?php ronfit_enquiry_cta(); ?>
</main>
<?php get_footer(); ?>
