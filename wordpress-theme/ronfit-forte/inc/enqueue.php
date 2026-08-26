<?php
/**
 * Asset enqueuing — compiled CSS, vendor carousel library, and site JS.
 * Fonts are loaded from Google Fonts, matching src/routes/__root.tsx exactly
 * (Sora 400/600/700 for headings, Manrope 400/500/600/700 for body).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'wp_enqueue_scripts',
	function () {
		$theme_version = wp_get_theme()->get( 'Version' );

		wp_enqueue_style(
			'ronfit-forte-main',
			get_template_directory_uri() . '/assets/css/main.css',
			array(),
			$theme_version
		);

		wp_enqueue_script(
			'embla-carousel',
			get_template_directory_uri() . '/assets/js/vendor/embla-carousel.umd.js',
			array(),
			$theme_version,
			true
		);

		wp_enqueue_script(
			'embla-carousel-autoplay',
			get_template_directory_uri() . '/assets/js/vendor/embla-carousel-autoplay.umd.js',
			array( 'embla-carousel' ),
			$theme_version,
			true
		);

		wp_enqueue_script(
			'ronfit-forte-main',
			get_template_directory_uri() . '/assets/js/main.js',
			array( 'embla-carousel', 'embla-carousel-autoplay' ),
			$theme_version,
			true
		);

		wp_localize_script(
			'ronfit-forte-main',
			'ronfitForte',
			array(
				'whatsappNumber' => RONFIT_WHATSAPP,
				'email'          => RONFIT_EMAIL,
				'productsIndex'  => array_values( ronfit_products() ),
				'categoriesIndex' => array_values( ronfit_categories() ),
				'insightsIndex'  => ronfit_search_insights_index(),
			)
		);
	}
);

add_action(
	'wp_head',
	function () {
		echo '<meta charset="' . esc_attr( get_bloginfo( 'charset' ) ) . '">' . "\n";
		echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
		echo '<meta name="author" content="' . esc_attr( RONFIT_NAME ) . '">' . "\n";
		echo '<meta property="og:locale" content="en_US">' . "\n";
		echo '<meta name="theme-color" content="#ffffff">' . "\n";
		ronfit_print_seo_head();
		?>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;500;600;700&display=swap">
		<?php
	},
	1
);

/**
 * Lightweight JSON index of published Insights (title/excerpt/topic/date/
 * url/image) for the client-side /search page filter — mirrors the
 * in-browser filter behaviour of src/routes/search.tsx.
 *
 * @return array<int, array<string, string>>
 */
function ronfit_search_insights_index() {
	$query = new WP_Query(
		array(
			'post_type'      => 'post',
			'post_status'    => 'publish',
			'posts_per_page' => -1,
			'no_found_rows'  => true,
		)
	);

	$items = array();
	foreach ( $query->posts as $post ) {
		$items[] = array(
			'title'   => get_the_title( $post ),
			'excerpt' => wp_strip_all_tags( get_the_excerpt( $post ) ),
			'topic'   => wp_strip_all_tags( get_the_category( $post->ID ) ? implode( ', ', wp_list_pluck( get_the_category( $post->ID ), 'name' ) ) : '' ),
			'date'    => get_the_date( 'j F Y', $post ),
			'url'     => home_url( '/insights/' . $post->post_name . '/' ),
			'image'   => get_the_post_thumbnail_url( $post, 'medium' ) ?: '',
		);
	}
	wp_reset_postdata();

	return $items;
}
