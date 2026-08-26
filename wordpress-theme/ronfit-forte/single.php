<?php
/**
 * Single Insight article (/insights/{slug}/) — ports src/routes/insights/$slug.tsx.
 * Used automatically by WordPress for single Posts.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Prime the global $post / postdata before get_header() so get_the_title(),
// get_the_excerpt(), the_content(), etc. all work correctly even when called
// ahead of a conventional Loop position (there is exactly one post on a
// singular template, so a single the_post() call is sufficient for the rest
// of this file — no further Loop/endwhile needed).
if ( have_posts() ) {
	the_post();
}

global $ronfit_seo;
$ronfit_seo = array(
	'title'       => get_the_title() . ' | ' . RONFIT_NAME,
	'description' => wp_strip_all_tags( get_the_excerpt() ),
	'canonical'   => home_url( '/insights/' . get_post_field( 'post_name' ) . '/' ),
	'og_type'     => 'article',
	'schemas'     => array(
		ronfit_breadcrumb_schema(
			array(
				array(
					'label' => 'Home',
					'url'   => home_url( '/' ),
				),
				array(
					'label' => 'Insights',
					'url'   => home_url( '/insights/' ),
				),
				array( 'label' => get_the_title() ),
			)
		),
		ronfit_article_schema( get_the_ID() ),
	),
);

get_header();

$ronfit_hero_image = get_the_post_thumbnail_url( get_the_ID(), 'ronfit-insight-lead' ) ?: ronfit_site_image_url( 'ronfit-forte-og-image.png' );

$ronfit_related_query = new WP_Query(
	array(
		'post_type'      => 'post',
		'post_status'    => 'publish',
		'posts_per_page' => 3,
		'post__not_in'   => array( get_the_ID() ),
		'no_found_rows'  => true,
		'ignore_sticky_posts' => true,
	)
);
$ronfit_related = $ronfit_related_query->posts;
?>
<main>
	<?php
	ronfit_breadcrumbs(
		array(
			array(
				'label' => 'Home',
				'url'   => home_url( '/' ),
			),
			array(
				'label' => 'Insights',
				'url'   => home_url( '/insights/' ),
			),
			array( 'label' => get_the_title() ),
		)
	);
	?>

	<article class="container-page py-10">
		<div class="max-w-3xl">
			<span class="pill-label"><?php echo esc_html( ronfit_insight_topic( get_the_ID() ) ); ?></span>
			<h1 class="mt-5 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"><?php the_title(); ?></h1>
			<p class="mt-4 text-sm text-muted-foreground">
				<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date( 'j F Y' ) ); ?></time>
			</p>
		</div>

		<div class="lozenge-frame mt-10 max-h-[28rem]">
			<img src="<?php echo esc_url( $ronfit_hero_image ); ?>" alt="<?php the_title_attribute(); ?>" width="1600" height="900" class="h-full w-full object-cover">
		</div>

		<div class="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-muted-foreground">
			<?php the_content(); ?>
		</div>
	</article>

	<?php if ( ! empty( $ronfit_related ) ) : ?>
		<section class="bg-secondary py-16 curve-top">
			<div class="container-page">
				<p class="pill-label">More insights</p>
				<div class="mt-8 grid gap-5 sm:grid-cols-3">
					<?php foreach ( $ronfit_related as $post ) : ?>
						<a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="rounded-[1.75rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
							<span class="text-xs font-semibold tracking-[0.18em] text-primary"><?php echo esc_html( ronfit_insight_topic( $post->ID ) ); ?></span>
							<h3 class="mt-3 text-base font-semibold leading-snug text-foreground"><?php echo esc_html( get_the_title( $post ) ); ?></h3>
							<p class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( wp_strip_all_tags( get_the_excerpt( $post ) ) ); ?></p>
						</a>
					<?php endforeach; ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php ronfit_enquiry_cta(); ?>
</main>
<?php
wp_reset_postdata();
get_footer();
