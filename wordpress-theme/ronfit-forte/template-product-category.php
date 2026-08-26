<?php
/**
 * Virtual route: /product-category/{slug}/ — ports src/routes/product-category/$slug.tsx.
 * Loaded via inc/rewrites.php's template_include filter; the slug is already
 * validated to exist by the time this file runs.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$category_slug = get_query_var( 'ronfit_category' );
$category       = ronfit_get_category( $category_slug );
$items          = ronfit_products_by_category( $category['slug'] );
$others         = array_values(
	array_filter(
		ronfit_categories(),
		function ( $c ) use ( $category ) {
			return $c['slug'] !== $category['slug'];
		}
	)
);

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => $category['seo_title'],
	'description' => $category['seo_description'],
	'canonical'   => home_url( '/product-category/' . $category['slug'] . '/' ),
	'og_image'    => $category['image'],
	'schemas'     => array(
		ronfit_breadcrumb_schema(
			array(
				array( 'label' => 'Home', 'url' => home_url( '/' ) ),
				array( 'label' => 'Products', 'url' => home_url( '/products/' ) ),
				array( 'label' => $category['name'] ),
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
			array( 'label' => $category['name'] ),
		)
	);

	ronfit_page_hero(
		array(
			'eyebrow'     => 'Category ' . $category['number'],
			'title'       => esc_html( $category['name'] ),
			'intro'       => $category['intro'],
			'image'       => array(
				'url' => $category['image'],
				'alt' => $category['image_alt'],
			),
			'variant'     => 'banner',
			'image_align' => 'right',
		)
	);
	?>

	<section class="container-page py-14">
		<h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Products in this category</h2>
		<p class="mt-2 text-sm text-muted-foreground"><?php echo esc_html( count( $items ) ); ?> <?php echo 1 === count( $items ) ? 'product' : 'products'; ?></p>
		<div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			<?php foreach ( $items as $p ) : ?>
				<?php ronfit_product_card( $p ); ?>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="bg-secondary py-16 curve-top">
		<div class="container-page max-w-3xl">
			<p class="pill-label">Category notes</p>
			<h2 class="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"><?php echo esc_html( $category['editorial']['heading'] ); ?></h2>
			<div class="mt-6 space-y-5">
				<?php foreach ( $category['editorial']['body'] as $paragraph ) : ?>
					<p class="text-base leading-relaxed text-muted-foreground"><?php echo esc_html( $paragraph ); ?></p>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="container-page py-14">
		<h2 class="text-xl font-semibold text-foreground">Other categories</h2>
		<div class="mt-6 flex flex-wrap gap-3">
			<?php foreach ( $others as $c ) : ?>
				<a href="<?php echo esc_url( home_url( '/product-category/' . $c['slug'] . '/' ) ); ?>" class="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"><?php echo esc_html( $c['name'] ); ?></a>
			<?php endforeach; ?>
		</div>
	</section>

	<?php ronfit_enquiry_cta( 'Enquire about the ' . $category['name'] . ' range' ); ?>
</main>
<?php get_footer(); ?>
