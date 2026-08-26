<?php
/**
 * Virtual route: /products/{slug}/ — ports src/routes/products/$slug.tsx.
 * Loaded via inc/rewrites.php's template_include filter; the slug is already
 * validated to exist by the time this file runs.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$product_slug = get_query_var( 'ronfit_product' );
$product      = ronfit_get_product( $product_slug );
$category     = ronfit_get_category( $product['category'] );
$related      = ronfit_related_products( $product, 4 );

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => $product['name'] . ' | ' . $category['name'] . ' | Ronfit Forte',
	'description' => mb_substr( $product['summary'], 0, 158 ),
	'canonical'   => home_url( '/products/' . $product['slug'] . '/' ),
	'og_image'    => $product['image'],
	'schemas'     => array(
		ronfit_product_schema( $product, $category ),
		ronfit_breadcrumb_schema(
			array(
				array( 'label' => 'Home', 'url' => home_url( '/' ) ),
				array( 'label' => 'Products', 'url' => home_url( '/products/' ) ),
				array( 'label' => $product['name'] ),
			)
		),
	),
);

get_header();
?>
<main>
	<?php
	ronfit_breadcrumbs(
		array(
			array( 'label' => 'Home', 'url' => home_url( '/' ) ),
			array( 'label' => 'Products', 'url' => home_url( '/products/' ) ),
			array( 'label' => $product['name'] ),
		)
	);
	?>

	<section class="container-page grid gap-10 py-12 lg:grid-cols-2 lg:py-16">
		<div class="<?php echo esc_attr( $category['accent_class'] ); ?> flex items-center justify-center rounded-[2.5rem] p-10">
			<img src="<?php echo esc_url( $product['image'] ); ?>" alt="<?php echo esc_attr( $product['image_alt'] ); ?>" width="900" height="900" class="h-auto max-h-[26rem] w-auto object-contain">
		</div>

		<div>
			<a href="<?php echo esc_url( home_url( '/product-category/' . $category['slug'] . '/' ) ); ?>" class="pill-label"><?php echo esc_html( $category['name'] ); ?></a>
			<h1 class="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"><?php echo esc_html( $product['name'] ); ?></h1>
			<p class="mt-2 text-sm uppercase tracking-[0.14em] text-muted-foreground"><?php echo esc_html( $product['format'] ); ?></p>
			<p class="mt-6 text-base leading-relaxed text-muted-foreground"><?php echo esc_html( $product['summary'] ); ?></p>

			<h2 class="mt-9 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Product notes</h2>
			<ul class="mt-4 space-y-3">
				<?php foreach ( $product['details'] as $detail ) : ?>
					<li class="flex gap-3 text-sm leading-relaxed text-muted-foreground">
						<span aria-hidden="true" class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
						<?php echo esc_html( $detail ); ?>
					</li>
				<?php endforeach; ?>
			</ul>

			<p class="mt-8 rounded-2xl border border-border bg-secondary p-5 text-sm leading-relaxed text-muted-foreground">Availability, documentation and product requirements differ by territory. We discuss these directly with each partner rather than publishing market-specific information here.</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a href="<?php echo esc_url( home_url( '/business-enquiry/' ) ); ?>" class="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft">Enquire about this product</a>
				<a href="<?php echo esc_url( ronfit_whatsapp_link( 'Hello Ronfit Forte, I would like information about ' . $product['name'] . '.' ) ); ?>" target="_blank" rel="noopener noreferrer" class="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">WhatsApp our team</a>
			</div>
			<p class="mt-3 text-xs text-muted-foreground">Or email <a href="mailto:<?php echo esc_attr( RONFIT_EMAIL ); ?>" class="font-semibold text-primary"><?php echo esc_html( RONFIT_EMAIL ); ?></a></p>
		</div>
	</section>

	<?php if ( ! empty( $related ) ) : ?>
		<section class="bg-secondary py-16 curve-top">
			<div class="container-page">
				<p class="pill-label">Related</p>
				<h2 class="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">More from <?php echo esc_html( $category['name'] ); ?></h2>
				<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
					<?php foreach ( $related as $p ) : ?>
						<?php ronfit_product_card( $p ); ?>
					<?php endforeach; ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php ronfit_enquiry_cta(); ?>
</main>
<?php get_footer(); ?>
