<?php
/**
 * Insights index (/insights/) — ports src/routes/insights/index.tsx.
 * Used automatically by WordPress for the site's "Posts page".
 *
 * The source route shows every insight on one page (no pagination) — this
 * template intentionally runs its own WP_Query with posts_per_page => -1
 * to match that, rather than relying on the paginated main query.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => 'Insights | Healthcare Distribution & Portfolio Articles',
	'description' => 'Articles on healthcare distribution, portfolio structure, packaging consistency and therapeutic category planning from the Ronfit Forte team.',
	'canonical'   => home_url( '/insights/' ),
);

get_header();

$ronfit_insights_query = new WP_Query(
	array(
		'post_type'      => 'post',
		'post_status'    => 'publish',
		'posts_per_page' => -1,
		'no_found_rows'  => true,
	)
);
$ronfit_all_insights = $ronfit_insights_query->posts;
$ronfit_lead         = array_shift( $ronfit_all_insights );
$ronfit_rest         = $ronfit_all_insights;
?>
<main>
	<?php
	ronfit_page_hero(
		array(
			'eyebrow' => 'Insights',
			'title'   => 'Notes on healthcare <span class="text-primary">distribution and portfolios</span>',
			'intro'   => 'General commentary written for business partners — how ranges are structured, how buyers evaluate them and what makes a healthcare portfolio easier to sell. No medical claims, no market statistics.',
		)
	);
	?>

	<?php if ( $ronfit_lead ) :
		$lead_image = get_the_post_thumbnail_url( $ronfit_lead, 'ronfit-insight-lead' ) ?: ronfit_site_image_url( 'ronfit-forte-og-image.png' );
		?>
		<section class="container-page py-14">
			<a href="<?php echo esc_url( get_permalink( $ronfit_lead ) ); ?>" class="group grid gap-8 overflow-hidden rounded-[2.5rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2">
				<img src="<?php echo esc_url( $lead_image ); ?>" alt="<?php echo esc_attr( get_the_title( $ronfit_lead ) ); ?>" width="1200" height="800" class="h-full max-h-80 w-full object-cover">
				<div class="p-8 lg:py-10 lg:pr-10">
					<span class="pill-label"><?php echo esc_html( ronfit_insight_topic( $ronfit_lead->ID ) ); ?></span>
					<h2 class="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"><?php echo esc_html( get_the_title( $ronfit_lead ) ); ?></h2>
					<p class="mt-4 text-base leading-relaxed text-muted-foreground"><?php echo esc_html( wp_strip_all_tags( get_the_excerpt( $ronfit_lead ) ) ); ?></p>
					<p class="mt-5 text-xs text-muted-foreground"><?php echo esc_html( get_the_date( 'j F Y', $ronfit_lead ) ); ?></p>
					<span class="mt-5 inline-block text-sm font-semibold text-primary">Read the article &rarr;</span>
				</div>
			</a>
		</section>
	<?php endif; ?>

	<section class="container-page pb-16">
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			<?php foreach ( $ronfit_rest as $post ) :
				$card_image = get_the_post_thumbnail_url( $post, 'ronfit-insight-card' ) ?: ronfit_site_image_url( 'ronfit-forte-og-image.png' );
				?>
				<a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
					<img src="<?php echo esc_url( $card_image ); ?>" alt="<?php echo esc_attr( get_the_title( $post ) ); ?>" width="800" height="500" loading="lazy" class="h-44 w-full object-cover">
					<div class="flex flex-1 flex-col p-6">
						<span class="text-xs font-semibold tracking-[0.18em] text-primary"><?php echo esc_html( ronfit_insight_topic( $post->ID ) ); ?></span>
						<h2 class="mt-3 text-lg font-semibold leading-snug text-foreground"><?php echo esc_html( get_the_title( $post ) ); ?></h2>
						<p class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( wp_strip_all_tags( get_the_excerpt( $post ) ) ); ?></p>
						<p class="mt-auto pt-4 text-xs text-muted-foreground"><?php echo esc_html( get_the_date( 'j F Y', $post ) ); ?></p>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</section>

	<?php ronfit_enquiry_cta(); ?>
</main>
<?php
wp_reset_postdata();
get_footer();
