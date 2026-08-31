<?php
/**
 * SEO / Open Graph / JSON-LD helpers — ported from src/lib/seo.ts.
 *
 * Contract: any template that needs page-specific SEO sets the
 * $ronfit_seo global BEFORE calling get_header(), e.g.:
 *
 *   global $ronfit_seo;
 *   $ronfit_seo = array(
 *       'title'       => 'Infant Nutrition Products | Ronfit',
 *       'description' => '...',
 *       'canonical'   => home_url( '/product-category/infant-nutrition/' ),
 *       'og_type'      => 'website',
 *       'noindex'      => false,
 *       'schemas'      => array( ronfit_breadcrumb_schema( ... ), ronfit_product_schema( ... ) ),
 *   );
 *   get_header();
 *
 * header.php reads this global and falls back to sensible WordPress
 * defaults (post title/excerpt) when it isn't set, so single.php/home.php
 * work even without explicit overrides.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return string Absolute URL of the Organization logo image, for JSON-LD.
 */
function ronfit_logo_absolute_url() {
	return ronfit_site_image_url( 'ronfit-forte-logo.png' );
}

/**
 * @return array<string, mixed>
 */
function ronfit_organization_schema() {
	$lines = ronfit_address_lines();
	return array(
		'@context'          => 'https://schema.org',
		'@type'             => 'Organization',
		'name'              => RONFIT_NAME,
		'url'               => home_url( '/' ),
		'logo'              => ronfit_logo_absolute_url(),
		'email'             => RONFIT_EMAIL,
		'telephone'         => RONFIT_PHONE,
		'address'           => array(
			'@type'          => 'PostalAddress',
			'streetAddress'  => implode( ', ', $lines ),
			'addressLocality' => RONFIT_ADDRESS_CITY,
			'addressRegion'  => RONFIT_ADDRESS_REGION,
			'postalCode'     => RONFIT_ADDRESS_POSTAL,
			'addressCountry' => RONFIT_ADDRESS_COUNTRY,
		),
		'parentOrganization' => array(
			'@type' => 'Organization',
			'name'  => RONFIT_PARENT_NAME,
			'url'   => RONFIT_PARENT_URL,
		),
	);
}

/**
 * @param array<int, array{label:string, url?:string}> $items
 * @return array<string, mixed>
 */
function ronfit_breadcrumb_schema( $items ) {
	$list = array();
	foreach ( $items as $i => $item ) {
		$entry = array(
			'@type'    => 'ListItem',
			'position' => $i + 1,
			'name'     => $item['label'],
		);
		if ( ! empty( $item['url'] ) ) {
			$entry['item'] = $item['url'];
		}
		$list[] = $entry;
	}
	return array(
		'@context'        => 'https://schema.org',
		'@type'           => 'BreadcrumbList',
		'itemListElement' => $list,
	);
}

/**
 * @param array<string, mixed> $product
 * @param array<string, mixed> $category
 * @return array<string, mixed>
 */
function ronfit_product_schema( $product, $category ) {
	return array(
		'@context'    => 'https://schema.org',
		'@type'       => 'Product',
		'name'        => $product['name'],
		'description' => $product['summary'],
		'image'       => $product['image'],
		'category'    => $category['name'],
		'brand'       => array(
			'@type' => 'Brand',
			'name'  => RONFIT_NAME,
		),
		'url'         => home_url( '/products/' . $product['slug'] . '/' ),
	);
}

/**
 * @param int $post_id
 * @return array<string, mixed>
 */
function ronfit_article_schema( $post_id ) {
	$permalink = home_url( '/insights/' . get_post_field( 'post_name', $post_id ) . '/' );
	$image     = get_the_post_thumbnail_url( $post_id, 'large' );
	if ( ! $image ) {
		$image = ronfit_site_image_url( 'ronfit-forte-og-image.png' );
	}
	return array(
		'@context'         => 'https://schema.org',
		'@type'            => 'Article',
		'headline'         => get_the_title( $post_id ),
		'description'      => wp_strip_all_tags( get_the_excerpt( $post_id ) ),
		'image'            => $image,
		'datePublished'    => get_the_date( 'c', $post_id ),
		'author'           => array(
			'@type' => 'Organization',
			'name'  => RONFIT_NAME,
		),
		'publisher'        => array(
			'@type' => 'Organization',
			'name'  => RONFIT_NAME,
			'logo'  => array(
				'@type' => 'ImageObject',
				'url'   => ronfit_logo_absolute_url(),
			),
		),
		'mainEntityOfPage' => $permalink,
	);
}

/**
 * Echoes a <script type="application/ld+json"> tag for a schema array.
 *
 * @param array<string, mixed> $schema
 */
function ronfit_print_json_ld( $schema ) {
	echo '<script type="application/ld+json">' . wp_json_encode( $schema ) . '</script>' . "\n";
}

/**
 * Prints <title>, meta description/OG/Twitter tags, canonical link and any
 * JSON-LD schemas for the current page. Reads the $ronfit_seo global set by
 * the current template, falling back to WordPress defaults.
 */
function ronfit_print_seo_head() {
	global $ronfit_seo;

	$defaults = array(
		'title'       => RONFIT_NAME . ' | Global B2B Healthcare Product Portfolio',
		'description' => 'Explore the Ronfit Forte healthcare portfolio across nutrition, paediatric care, cold and flu, pain relief, topical care and dermatology.',
		'canonical'   => home_url( add_query_arg( array(), $GLOBALS['wp']->request ) ),
		'og_type'     => 'website',
		'noindex'     => false,
		'schemas'     => array(),
		'og_image'    => ronfit_site_image_url( 'ronfit-forte-og-image.png' ),
	);

	if ( is_singular( 'post' ) ) {
		$defaults['title']       = get_the_title() . ' | ' . RONFIT_NAME . ' Insights';
		$defaults['description'] = wp_strip_all_tags( get_the_excerpt() );
		$defaults['canonical']   = home_url( '/insights/' . get_post_field( 'post_name' ) . '/' );
		$defaults['og_type']     = 'article';
	}

	$seo = is_array( $ronfit_seo ) ? array_merge( $defaults, $ronfit_seo ) : $defaults;

	echo '<title>' . esc_html( $seo['title'] ) . '</title>' . "\n";
	echo '<meta name="description" content="' . esc_attr( $seo['description'] ) . '">' . "\n";
	if ( ! empty( $seo['noindex'] ) ) {
		echo '<meta name="robots" content="noindex, follow">' . "\n";
	}
	echo '<link rel="canonical" href="' . esc_url( $seo['canonical'] ) . '">' . "\n";

	echo '<meta property="og:site_name" content="' . esc_attr( RONFIT_NAME ) . '">' . "\n";
	echo '<meta property="og:type" content="' . esc_attr( $seo['og_type'] ) . '">' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( $seo['title'] ) . '">' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $seo['description'] ) . '">' . "\n";
	echo '<meta property="og:url" content="' . esc_url( $seo['canonical'] ) . '">' . "\n";
	echo '<meta property="og:image" content="' . esc_url( $seo['og_image'] ) . '">' . "\n";
	echo '<meta property="og:image:width" content="1200">' . "\n";
	echo '<meta property="og:image:height" content="630">' . "\n";
	echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
	echo '<meta name="twitter:image" content="' . esc_url( $seo['og_image'] ) . '">' . "\n";

	// Organization schema on every page, matching src/routes/__root.tsx.
	ronfit_print_json_ld( ronfit_organization_schema() );

	foreach ( $seo['schemas'] as $schema ) {
		ronfit_print_json_ld( $schema );
	}
}
