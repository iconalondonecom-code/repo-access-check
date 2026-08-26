<?php
/* Template Name: Business Partnership */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Business Partnership | Partner With Ronfit Forte',
	'description' => 'Partner with Ronfit Forte as a distributor, importer, wholesaler, pharmacy network or retail chain. See what we bring to a partnership and how to start the conversation.',
	'canonical'   => home_url( '/business-partnership/' ),
);

get_header();

$benefits = array(
	array(
		'title' => 'A range you can explain in five minutes',
		'body'  => 'Seven named categories, consistent packaging and a predictable pack architecture — so your sales team can present the portfolio without a training programme.',
	),
	array(
		'title' => 'Multiple shelf positions, one supplier',
		'body'  => 'Tablets, syrups, gels, sprays, balms, lozenges and powders across the portfolio mean several listings can come from a single supplier relationship.',
	),
	array(
		'title' => 'Brand assets that stay consistent',
		'body'  => 'Product imagery and brand presentation are maintained centrally, so your local materials do not need to be rebuilt from scratch.',
	),
	array(
		'title' => 'Direct, named contact',
		'body'  => 'Partner enquiries go to a defined team rather than a general inbox, with responses tailored to your market and channel.',
	),
	array(
		'title' => 'Category-level conversations',
		'body'  => 'You can take a single category or the full range. Scope is agreed rather than imposed, which suits specialist and generalist partners alike.',
	),
	array(
		'title' => 'Backed by Ronak Group',
		'body'  => 'Group processes stand behind the brand for documentation requests, correspondence and long-term continuity.',
	),
);

$hero_title = 'Partner with Ronfit Forte and bring <span class="text-primary">trusted care</span> to more communities';
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'Business partnership',
			'title'   => $hero_title,
			'intro'   => 'We work with businesses that already understand their market. Our role is to supply a coherent healthcare portfolio, present it consistently and respond quickly to what your territory actually requires.',
			'image'   => array(
				'url' => ronfit_site_image_url( 'ronfit-business-partnership-background.png' ),
				'alt' => 'Healthcare business partnership visual',
			),
		)
	);
	?>

	<section class="container-page py-16">
		<p class="pill-label">Why partner with us</p>
		<h2 class="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">What a Ronfit Forte partnership gives you</h2>
		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			<?php foreach ( $benefits as $b ) : ?>
				<div class="rounded-[1.75rem] border border-border bg-card p-7">
					<h3 class="text-lg font-semibold text-foreground"><?php echo esc_html( $b['title'] ); ?></h3>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $b['body'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="bg-secondary py-16 curve-top">
		<div class="container-page grid gap-10 lg:grid-cols-2">
			<div>
				<p class="pill-label">Scope</p>
				<h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground">Take a category or the whole portfolio</h2>
				<p class="mt-5 text-base leading-relaxed text-muted-foreground">Partners rarely need everything at once. Many begin with the categories that match their existing shelf sets and expand from there once the range is established.</p>
				<div class="mt-7 flex flex-wrap gap-3">
					<?php foreach ( ronfit_categories() as $c ) : ?>
						<a href="<?php echo esc_url( home_url( '/product-category/' . $c['slug'] . '/' ) ); ?>" class="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"><?php echo esc_html( $c['short_name'] ); ?></a>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="rounded-[2rem] border border-border bg-card p-8">
				<h2 class="text-xl font-semibold text-foreground">What to include in your enquiry</h2>
				<ol class="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
					<li><span class="font-semibold text-foreground">1. Your market.</span> The territory you operate in.</li>
					<li><span class="font-semibold text-foreground">2. Your channel.</span> Pharmacy, modern trade, wholesale, retail chain or a combination.</li>
					<li><span class="font-semibold text-foreground">3. Your role.</span> Distributor, importer, wholesaler, pharmacy network, retail chain or healthcare business.</li>
					<li><span class="font-semibold text-foreground">4. Categories of interest.</span> Which parts of the portfolio you want to discuss first.</li>
				</ol>
				<a href="<?php echo esc_url( home_url( '/business-enquiry/' ) ); ?>" class="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground">Send a business enquiry</a>
			</div>
		</div>
	</section>

	<?php ronfit_enquiry_cta( 'Ready to start the conversation?' ); ?>
</main>
<?php get_footer(); ?>
