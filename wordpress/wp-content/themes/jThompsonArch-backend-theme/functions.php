<?php
/**
 * Theme for the Postlight Headless WordPress Starter Kit.
 *
 * Read more about this project at https://postlight.com/trackchanges/introducing-postlights-wordpress-react-starter-kit.
 *
 * @package  Postlight_Headless_WP
 */

// Frontend origin.
require_once 'inc/frontend-origin.php';

// ACF commands.
require_once 'inc/class-acf-commands.php';

// Logging functions.
require_once 'inc/log.php';

// CORS handling.
require_once 'inc/cors.php';

// Admin modifications.
require_once 'inc/admin.php';

// Add Menus.
require_once 'inc/menus.php';

// Add Headless Settings area.
require_once 'inc/acf-options.php';

// Add GraphQL resolvers.
require_once 'inc/graphql/resolvers.php';

// Meta register
require_once 'inc/meta-register.php';

// Custom post types
require_once 'inc/custom-post-types.php';

// Block register
require_once 'inc/block-register.php';

// Custom Taxonomies
require_once 'inc/custom-taxonomies.php';

add_theme_support('post-thumbnails');

function my_admin_scripts() {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
}
add_action( 'admin_enqueue_scripts', 'my_admin_scripts');
