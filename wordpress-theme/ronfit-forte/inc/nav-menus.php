<?php
/**
 * Nav menu registration. The header/footer "Quick Links" list still renders
 * from ronfit_main_nav() (inc/config.php) by default so the site looks right
 * immediately after activation, but registering real locations means the
 * client can restructure navigation from Appearance → Menus at any time.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'after_setup_theme',
	function () {
		register_nav_menus(
			array(
				'primary' => __( 'Primary Navigation', 'ronfit-forte' ),
				'footer'  => __( 'Footer Quick Links', 'ronfit-forte' ),
			)
		);
	}
);

/**
 * Seed a default "Primary Navigation" menu matching the source site's
 * mainNav on first activation, if no menu is already assigned to that
 * location — so the header works out of the box.
 */
function ronfit_seed_default_menu_on_activation() {
	if ( has_nav_menu( 'primary' ) ) {
		return;
	}

	$menu_name = 'Primary Navigation';
	$menu_id   = wp_create_nav_menu( $menu_name );
	if ( is_wp_error( $menu_id ) ) {
		return;
	}

	foreach ( ronfit_main_nav() as $index => $item ) {
		wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'  => $item['label'],
				'menu-item-url'    => $item['url'],
				'menu-item-status' => 'publish',
				'menu-item-position' => $index + 1,
			)
		);
	}

	$locations             = get_theme_mod( 'nav_menu_locations' );
	$locations['primary']  = $menu_id;
	set_theme_mod( 'nav_menu_locations', $locations );
}
// Hooked from functions.php's ronfit_run_initial_setup() — not registered
// directly here, since setup must be able to self-heal on 'init' too (see
// that function's docblock for why after_switch_theme alone isn't reliable).
