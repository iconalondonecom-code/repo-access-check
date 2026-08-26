<?php
/**
 * Virtual routes for the static product/category catalogue, plus the
 * /insights/{slug}/ permalink rewrite for native WordPress Posts.
 *
 * Products and categories are not WordPress objects (see inc/data-catalog.php),
 * so their URLs are served by matching a rewrite rule to a query var and
 * routing to a template via template_include — the standard WordPress
 * technique for "virtual" pages backed by non-post data.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'init',
	function () {
		add_rewrite_rule( '^products/([^/]+)/?$', 'index.php?ronfit_product=$matches[1]', 'top' );
		add_rewrite_rule( '^product-category/([^/]+)/?$', 'index.php?ronfit_category=$matches[1]', 'top' );
		add_rewrite_rule( '^insights/([^/]+)/?$', 'index.php?name=$matches[1]', 'top' );
	}
);

add_filter(
	'query_vars',
	function ( $vars ) {
		$vars[] = 'ronfit_product';
		$vars[] = 'ronfit_category';
		return $vars;
	}
);

add_filter(
	'template_include',
	function ( $template ) {
		$product_slug = get_query_var( 'ronfit_product' );
		if ( '' !== $product_slug ) {
			if ( null === ronfit_get_product( $product_slug ) ) {
				global $wp_query;
				$wp_query->set_404();
				status_header( 404 );
				return get_query_template( '404' );
			}
			return get_theme_file_path( 'template-product-single.php' );
		}

		$category_slug = get_query_var( 'ronfit_category' );
		if ( '' !== $category_slug ) {
			if ( null === ronfit_get_category( $category_slug ) ) {
				global $wp_query;
				$wp_query->set_404();
				status_header( 404 );
				return get_query_template( '404' );
			}
			return get_theme_file_path( 'template-product-category.php' );
		}

		return $template;
	}
);

/**
 * Route native Post permalinks through /insights/{slug}/ so the Insights
 * blog matches the source site's URLs exactly while staying fully native,
 * wp-admin-editable Posts.
 */
add_filter(
	'post_link',
	function ( $url, $post ) {
		if ( 'post' === $post->post_type ) {
			return home_url( '/insights/' . $post->post_name . '/' );
		}
		return $url;
	},
	10,
	2
);

add_filter(
	'post_type_link',
	function ( $url, $post ) {
		if ( 'post' === $post->post_type ) {
			return home_url( '/insights/' . $post->post_name . '/' );
		}
		return $url;
	},
	10,
	2
);

/**
 * Flush rewrite rules once on activation so the /products/, /product-category/
 * and /insights/ routes work immediately without a manual Permalinks save.
 */
function ronfit_flush_rewrites_on_activation() {
	// Re-run the same add_rewrite_rule() calls registered above before
	// flushing, since flush_rewrite_rules() rebuilds from rules registered
	// during this request only.
	add_rewrite_rule( '^products/([^/]+)/?$', 'index.php?ronfit_product=$matches[1]', 'top' );
	add_rewrite_rule( '^product-category/([^/]+)/?$', 'index.php?ronfit_category=$matches[1]', 'top' );
	add_rewrite_rule( '^insights/([^/]+)/?$', 'index.php?name=$matches[1]', 'top' );
	flush_rewrite_rules();
}
// Hooked from functions.php's ronfit_run_initial_setup() — see that
// function's docblock for why after_switch_theme alone isn't reliable.
