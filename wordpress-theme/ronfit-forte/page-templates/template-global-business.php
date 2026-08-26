<?php
/* Template Name: Global Business */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Global Business | Ronfit Forte Healthcare Exports',
	'description' => 'Ronfit Forte works with distributors, importers, wholesalers and pharmacy networks internationally. Learn how we structure partner conversations and territory discussions.',
	'canonical'   => home_url( '/global-business/' ),
);

get_header();

$steps = array(
	array(
		'step'  => '01',
		'title' => 'You tell us your market and channel',
		'body'  => 'An enquiry that names the territory, the channel you serve and the categories you are interested in lets us respond substantively rather than with clarifying questions.',
	),
	array(
		'step'  => '02',
		'title' => 'We assess portfolio fit',
		'body'  => 'We review which categories and formats match your channel, and identify where the range is strongest for your type of business.',
	),
	array(
		'step'  => '03',
		'title' => 'We discuss territory requirements',
		'body'  => 'Documentation, product requirements and availability differ by market. We work through these with you directly rather than publishing market-specific claims.',
	),
	array(
		'step'  => '04',
		'title' => 'We agree a working structure',
		'body'  => 'Once fit and requirements are clear, we move to a practical arrangement — category scope, presentation materials and a named point of contact.',
	),
);

$hero_title = 'Built for <span class="text-primary">international partner</span> conversations';
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'Global business',
			'title'   => $hero_title,
			'intro'   => 'Ronfit Forte is a B2B healthcare brand. We do not sell direct to consumers and we do not publish pricing. Our work is with businesses that distribute, import and retail healthcare products in their own markets.',
			'image'   => array(
				'url' => ronfit_site_image_url( 'ronfit-global-business-background.png' ),
				'alt' => 'International healthcare business network visual',
			),
		)
	);
	?>

	<section class="container-page py-16">
		<p class="pill-label">Who we work with</p>
		<h2 class="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">Partner types we are set up to support</h2>
		<div class="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<?php foreach ( ronfit_business_types() as $t ) : ?>
				<div class="rounded-2xl border border-border bg-card px-6 py-5 text-sm font-semibold text-foreground"><?php echo esc_html( $t ); ?></div>
			<?php endforeach; ?>
		</div>
		<p class="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">Each of these business types needs something slightly different from a supplier — an importer works to different timelines than a pharmacy network, and a retail chain plans around shelf sets rather than order files. Telling us your role in your first message lets us start in the right place.</p>
	</section>

	<section class="bg-secondary py-16 curve-top">
		<div class="container-page">
			<p class="pill-label">How it works</p>
			<h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground">From first enquiry to a working arrangement</h2>
			<div class="mt-10 grid gap-5 sm:grid-cols-2">
				<?php foreach ( $steps as $s ) : ?>
					<div class="rounded-[1.75rem] border border-border bg-card p-7">
						<span class="text-xs font-semibold tracking-[0.2em] text-primary"><?php echo esc_html( $s['step'] ); ?></span>
						<h3 class="mt-3 text-lg font-semibold text-foreground"><?php echo esc_html( $s['title'] ); ?></h3>
						<p class="mt-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $s['body'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="container-page py-16">
		<div class="max-w-3xl">
			<p class="pill-label">What we do not publish</p>
			<h2 class="mt-4 text-3xl font-semibold tracking-tight text-foreground">Territory information belongs in a conversation</h2>
			<p class="mt-5 text-base leading-relaxed text-muted-foreground">We do not list countries served, market statistics, certifications or facility claims on this website. Requirements, documentation and product availability vary between territories, and publishing generalised statements would be misleading to the partners we are trying to help.</p>
			<p class="mt-4 text-base leading-relaxed text-muted-foreground">Instead, we respond to each enquiry with the information relevant to that market. It is a slower way to build a website and a faster way to build a working relationship.</p>
		</div>
	</section>

	<?php ronfit_enquiry_cta( 'Discuss your market with our team' ); ?>
</main>
<?php get_footer(); ?>
