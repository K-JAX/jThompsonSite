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
    wp_register_style( 'style', get_stylesheet_directory_uri() . '/style.css', array() , '', 'all' );
    wp_enqueue_style( 'style', get_stylesheet_directory_uri() . '/style.css' );
}
add_action( 'admin_enqueue_scripts', 'my_admin_scripts');

define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'JTA-secret-power-token' );

function jwt_google_map_api(  ){
    $args = array(
        'libraries' => 'places',
        'key' => 'AIzaSyB3NzXkaZYw7LMSI0Vxn8ALFFowlIPGLLY',
        'client' => ''
    );
    return $args;
}

add_filter( 'acf/fields/google_map/api', 'jwt_google_map_api' );

function register_gutenberg(){
    add_theme_support('wp-block-styles');
}
add_action ('after_setup_theme','register_gutenberg');

wp_register_style( 'my-block-css', '/wp-includes/css/dist/block-library/style.min.css', array() , '', 'all' );
wp_enqueue_style( 'my-block-css');

// wp_register_script( 'enqueue_block_assets', '/wp-includes/js/dist/block-library.min.js', false, '1.0', true);
// wp_enqueue_script( 'enqueue_block_assets');