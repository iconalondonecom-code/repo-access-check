<?php
/**
 * Brand configuration — ported verbatim from src/lib/site.ts.
 * Update these values (not the templates) if brand details change.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'RONFIT_NAME', 'Ronfit Forte' );
define( 'RONFIT_TAGLINE', 'A Brand of Ronak Group' );
define( 'RONFIT_EMAIL', 'contact@ronak.global' );
define( 'RONFIT_PHONE', '+971 50 137 7674' );
define( 'RONFIT_PHONE_TEL', '+971501377674' );
define( 'RONFIT_WHATSAPP', '971501377674' );

define( 'RONFIT_PARENT_NAME', 'Ronak Group' );
define( 'RONFIT_PARENT_URL', 'https://ronak.global' );
define( 'RONFIT_PARENT_LABEL', 'ronak.global' );

define( 'RONFIT_ADDRESS_CITY', 'Vadodara' );
define( 'RONFIT_ADDRESS_REGION', 'Gujarat' );
define( 'RONFIT_ADDRESS_POSTAL', '390021' );
define( 'RONFIT_ADDRESS_COUNTRY', 'India' );

/**
 * @return string[]
 */
function ronfit_address_lines() {
	return array(
		'Ronak Group Building',
		'Gotri Road',
		'Next to Nilgiri Terrace',
		'Gadapura',
		'Hari Nagar',
	);
}

/**
 * @return string[]
 */
function ronfit_business_types() {
	return array(
		'Distributor',
		'Importer',
		'Wholesaler',
		'Pharmacy Network',
		'Retail Chain',
		'Healthcare Business',
		'Other',
	);
}

/**
 * Main header/footer navigation — kept to 6 items so the header nav fits on
 * one line; Insights is linked from the footer only (matches the source
 * site's mainNav / insightsNav split in src/lib/site.ts).
 *
 * @return array<int, array{label:string,url:string}>
 */
function ronfit_main_nav() {
	return array(
		array(
			'label' => 'Home',
			'url'   => home_url( '/' ),
		),
		array(
			'label' => 'About',
			'url'   => home_url( '/about/' ),
		),
		array(
			'label' => 'Products',
			'url'   => home_url( '/products/' ),
		),
		array(
			'label' => 'Global Business',
			'url'   => home_url( '/global-business/' ),
		),
		array(
			'label' => 'Business Partnership',
			'url'   => home_url( '/business-partnership/' ),
		),
		array(
			'label' => 'Contact',
			'url'   => home_url( '/contact/' ),
		),
	);
}

/**
 * @param string $message
 * @return string
 */
function ronfit_whatsapp_link( $message = '' ) {
	$url = 'https://wa.me/' . RONFIT_WHATSAPP;
	if ( '' !== $message ) {
		$url .= '?text=' . rawurlencode( $message );
	}
	return $url;
}

/**
 * @param string $path Theme-relative path under assets/images/products/.
 * @return string
 */
function ronfit_product_image_url( $path ) {
	return get_template_directory_uri() . '/assets/images/products/' . $path;
}

/**
 * @param string $path Theme-relative path under assets/images/site/.
 * @return string
 */
function ronfit_site_image_url( $path ) {
	return get_template_directory_uri() . '/assets/images/site/' . $path;
}
