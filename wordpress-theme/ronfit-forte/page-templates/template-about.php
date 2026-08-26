<?php
/* Template Name: About */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'About Ronfit Forte | A Healthcare Brand of Ronak Group',
	'description' => 'Ronfit Forte is the healthcare brand of Ronak Group, presenting a structured healthcare portfolio across multiple categories to distributors, importers and pharmacy networks worldwide.',
	'canonical'   => home_url( '/about/' ),
);

get_header();

$values = array(
	array(
		'title' => 'Clarity first',
		'body'  => 'Every product sits in a named category with consistent packaging, so a partner can understand the range without a briefing call.',
	),
	array(
		'title' => 'Say only what is confirmed',
		'body'  => 'We publish what appears on our packaging and nothing beyond it. Regulatory detail, documentation and availability are handled partner by partner.',
	),
	array(
		'title' => 'One point of contact',
		'body'  => 'Enquiries reach a named team rather than a queue, so partners get territory-relevant answers instead of generic brochures.',
	),
	array(
		'title' => 'Built to be presented',
		'body'  => 'The portfolio is designed to be merchandised — as category blocks, stage sequences and format families that make sense on a shelf.',
	),
);

$hero_title = 'A healthcare brand built to be <span class="text-primary">partnered with</span>';
$hero_intro = sprintf(
	'Ronfit Forte is the healthcare brand of %1$s, based in %2$s, %3$s. The portfolio spans products across multiple healthcare categories and is presented for international business partners rather than direct consumer sale.',
	RONFIT_PARENT_NAME,
	RONFIT_ADDRESS_CITY,
	RONFIT_ADDRESS_COUNTRY
);
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'About',
			'title'   => $hero_title,
			'intro'   => $hero_intro,
			'image'   => array(
				'url' => ronfit_site_image_url( 'ronfit-forte-brand-story.png' ),
				'alt' => 'Ronfit Forte brand and packaging system',
			),
			'variant' => 'banner',
		)
	);
	?>

	<section class="container-page grid gap-10 py-16 lg:grid-cols-2">
		<div>
			<p class="pill-label">Our approach</p>
			<h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground">A portfolio organised the way buyers think</h2>
			<p class="mt-5 text-base leading-relaxed text-muted-foreground">Healthcare buyers work in categories: infant nutrition, paediatric care, cold and flu, cough and throat, pain and fever, topical relief, skin care. Ronfit Forte is structured the same way, so a distributor can map the range onto the shelf sets and buyer conversations they already have.</p>
			<p class="mt-4 text-base leading-relaxed text-muted-foreground">Within each category, products share a pack architecture. The differentiating element — a stage number, a strength, a format — sits in a predictable position, which helps retail teams recommend confidently and helps partners present the range as a block.</p>
			<p class="mt-4 text-base leading-relaxed text-muted-foreground">We deliberately keep market-specific information out of the website. Requirements differ by territory, so those details belong in a direct conversation with each partner.</p>
		</div>
		<div class="lozenge-frame">
			<img src="<?php echo esc_url( ronfit_site_image_url( 'ronfit-healthcare-life-stages.png' ) ); ?>" alt="Healthcare products supporting every stage of life" width="1200" height="900" loading="lazy" class="h-full w-full object-cover">
		</div>
	</section>

	<section class="bg-secondary py-16 curve-top">
		<div class="container-page">
			<p class="pill-label">What we hold to</p>
			<h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground">Four commitments that shape how we work</h2>
			<div class="mt-10 grid gap-5 sm:grid-cols-2">
				<?php foreach ( $values as $v ) : ?>
					<div class="rounded-[1.75rem] border border-border bg-card p-7">
						<h3 class="text-lg font-semibold text-foreground"><?php echo esc_html( $v['title'] ); ?></h3>
						<p class="mt-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $v['body'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="container-page py-16">
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<div class="lozenge-frame">
				<img src="<?php echo esc_url( ronfit_site_image_url( 'ronak-group-section-background.png' ) ); ?>" alt="<?php echo esc_attr( RONFIT_PARENT_NAME . ' corporate visual' ); ?>" width="1200" height="800" loading="lazy" class="h-full w-full object-cover">
			</div>
			<div>
				<p class="pill-label">A brand of</p>
				<h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground"><?php echo esc_html( RONFIT_PARENT_NAME ); ?></h2>
				<p class="mt-5 text-base leading-relaxed text-muted-foreground">Ronfit Forte operates as the healthcare brand within <?php echo esc_html( RONFIT_PARENT_NAME ); ?>. For partners, group backing means settled processes for documentation requests, brand assets and commercial correspondence, and a defined owner for the relationship.</p>
				<a href="<?php echo esc_url( RONFIT_PARENT_URL ); ?>" target="_blank" rel="noopener noreferrer" class="mt-7 inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Visit <?php echo esc_html( RONFIT_PARENT_LABEL ); ?></a>
			</div>
		</div>
	</section>

	<section class="container-page pb-4">
		<div class="flex flex-wrap gap-3">
			<a href="<?php echo esc_url( home_url( '/products/' ) ); ?>" class="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">Explore the portfolio</a>
			<a href="<?php echo esc_url( home_url( '/global-business/' ) ); ?>" class="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">Global business</a>
		</div>
	</section>

	<?php ronfit_enquiry_cta(); ?>
</main>
<?php get_footer(); ?>
