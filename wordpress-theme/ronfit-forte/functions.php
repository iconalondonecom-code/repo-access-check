<?php
/**
 * Ronfit Forte theme bootstrap.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require get_template_directory() . '/inc/config.php';
require get_template_directory() . '/inc/data-catalog.php';
require get_template_directory() . '/inc/seo.php';
require get_template_directory() . '/inc/enqueue.php';
require get_template_directory() . '/inc/nav-menus.php';
require get_template_directory() . '/inc/rewrites.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/seed-insights.php';

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'custom-logo' );

		// Insights hero/lead images benefit from a wider crop than WP's
		// default "medium"/"large" sizes provide.
		add_image_size( 'ronfit-insight-lead', 1200, 780, true );
		add_image_size( 'ronfit-insight-card', 800, 520, true );
	}
);

/**
 * robots.txt content — mirrors the source site's public/robots.txt.
 * Update the Sitemap line's domain to match the live install.
 *
 * @param string $output
 * @return string
 */
add_filter(
	'robots_txt',
	function ( $output ) {
		$sitemap = home_url( '/sitemap.xml' );
		return "User-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nUser-agent: Twitterbot\nAllow: /\n\nUser-agent: facebookexternalhit\nAllow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: {$sitemap}\n";
	}
);

define( 'RONFIT_SETUP_VERSION', '1' );

/**
 * Runs every first-time setup step (static pages, front page, posts page,
 * default menu, Insights seed content, rewrite flush) exactly once.
 *
 * This is hooked to BOTH 'after_switch_theme' (the normal case — fires when
 * you click Activate in Appearance → Themes) AND a guarded 'init' callback
 * below. The 'init' fallback matters because 'after_switch_theme' only fires
 * on a genuine theme-switch transition recorded by WordPress core — if the
 * theme's files were uploaded/extracted directly into wp-content/themes/ and
 * WordPress simply already considered that theme slug "active" (e.g. after
 * overwriting an earlier copy of this same theme), that transition never
 * happens and none of this setup runs, leaving the site with no pages, no
 * front page, and no seeded content — which looks like a blank/broken site.
 * The 'init' guard (an option flag) makes setup self-healing: it completes
 * on the very next page load regardless of how the theme became active, and
 * never re-runs once done.
 */
function ronfit_run_initial_setup() {
	ronfit_ensure_static_pages();
	ronfit_ensure_insights_posts_page();
	ronfit_ensure_front_page();

	if ( function_exists( 'ronfit_seed_default_menu_on_activation' ) ) {
		ronfit_seed_default_menu_on_activation();
	}
	if ( function_exists( 'ronfit_seed_insights_on_activation' ) ) {
		ronfit_seed_insights_on_activation();
	}
	if ( function_exists( 'ronfit_flush_rewrites_on_activation' ) ) {
		ronfit_flush_rewrites_on_activation();
	}

	update_option( 'ronfit_setup_complete', RONFIT_SETUP_VERSION );
}
add_action( 'after_switch_theme', 'ronfit_run_initial_setup' );

add_action(
	'init',
	function () {
		if ( get_option( 'ronfit_setup_complete' ) === RONFIT_SETUP_VERSION ) {
			return;
		}
		ronfit_run_initial_setup();
	},
	20
);

/**
 * Auto-assign the "Insights" page as the site's Posts Page on activation
 * (if one doesn't already exist), so /insights/ renders home.php immediately
 * without a manual Settings → Reading step. Safe to run more than once.
 */
function ronfit_ensure_insights_posts_page() {
	$existing = get_page_by_path( 'insights' );

	if ( ! $existing ) {
		$page_id = wp_insert_post(
			array(
				'post_title'   => 'Insights',
				'post_name'    => 'insights',
				'post_status'  => 'publish',
				'post_type'    => 'page',
				'post_content' => '',
			)
		);
	} else {
		$page_id = $existing->ID;
	}

	if ( $page_id && ! is_wp_error( $page_id ) ) {
		update_option( 'show_on_front', 'page' );
		if ( ! get_option( 'page_on_front' ) ) {
			// Leave page_on_front unset here; front-page.php serves the
			// homepage automatically for any static front page once one is
			// chosen. We only need page_for_posts wired up.
		}
		update_option( 'page_for_posts', $page_id );
	}
}
// Called from ronfit_run_initial_setup() above — not hooked directly here.

/**
 * Ensure a static front page exists and is selected, so front-page.php
 * (the homepage template) is used instead of the Insights posts listing.
 */
function ronfit_ensure_front_page() {
	$existing = get_page_by_path( 'home' );

	if ( ! $existing ) {
		$page_id = wp_insert_post(
			array(
				'post_title'   => 'Home',
				'post_name'    => 'home',
				'post_status'  => 'publish',
				'post_type'    => 'page',
				'post_content' => '',
			)
		);
	} else {
		$page_id = $existing->ID;
	}

	if ( $page_id && ! is_wp_error( $page_id ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $page_id );
	}
}
// Called from ronfit_run_initial_setup() above — not hooked directly here.

/**
 * Auto-create the theme's static pages (if missing) and assign each one its
 * page template, so every route works immediately after activation without
 * requiring the client to manually create pages first.
 */
function ronfit_ensure_static_pages() {
	$pages = array(
		'about'                 => array( 'title' => 'About', 'template' => 'page-templates/template-about.php' ),
		'products'              => array( 'title' => 'Products', 'template' => 'page-templates/template-products.php' ),
		'global-business'       => array( 'title' => 'Global Business', 'template' => 'page-templates/template-global-business.php' ),
		'business-partnership'  => array( 'title' => 'Business Partnership', 'template' => 'page-templates/template-business-partnership.php' ),
		'contact'               => array( 'title' => 'Contact', 'template' => 'page-templates/template-contact.php' ),
		'business-enquiry'      => array( 'title' => 'Business Enquiry', 'template' => 'page-templates/template-business-enquiry.php' ),
		'privacy-policy'        => array( 'title' => 'Privacy Policy', 'template' => 'page-templates/template-privacy-policy.php' ),
		'terms-and-conditions'  => array( 'title' => 'Terms & Conditions', 'template' => 'page-templates/template-terms.php' ),
		'search'                => array( 'title' => 'Search', 'template' => 'page-templates/template-search.php' ),
	);

	foreach ( $pages as $slug => $info ) {
		$existing = get_page_by_path( $slug );
		if ( $existing ) {
			$page_id = $existing->ID;
		} else {
			$page_id = wp_insert_post(
				array(
					'post_title'   => $info['title'],
					'post_name'    => $slug,
					'post_status'  => 'publish',
					'post_type'    => 'page',
					'post_content' => '',
				)
			);
		}

		if ( $page_id && ! is_wp_error( $page_id ) ) {
			update_post_meta( $page_id, '_wp_page_template', $info['template'] );
		}
	}
}
// Called from ronfit_run_initial_setup() above — not hooked directly here.
