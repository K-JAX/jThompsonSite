<?php
/**
 * Register main menu.
 *
 * @package  Postlight_Headless_WP
 */

/**
 * Register navigation menu.
 *
 * @return void
 */
function register_menus() {
	register_nav_menu( 'header-menu', __( 'Header Menu', 'jwt' ) );
	register_nav_menu( 'social-menu', __( 'Social Menu', 'jwt' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
