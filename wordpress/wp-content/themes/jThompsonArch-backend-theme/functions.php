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


// function add_cors_http_header(){
//     header("Access-Control-Allow-Origin: *");
// }
// add_action('init','add_cors_http_header');

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

class Cors_Media {

    const QUERY_VAR = 'cors_media_id';

    public function init() {
        add_action('init', [$this, 'add_rewrite_rule']);
        add_filter('query_vars', [$this, 'query_vars']);
        add_action('template_redirect', [$this, 'template_redirect']);
    }

    public function query_vars(array $qs) {
        $qs[] = 'cors_media_id';
        return $qs;
    }

    public function add_rewrite_rule() {
        add_rewrite_rule(
            '^cors_media_id/([0-9]+)/?',
            'index.php?cors_media_id=$matches[1]',
            'top'
        );
    }

    public function template_redirect() {
        $att_id = get_query_var('cors_media_id');
        if (empty($att_id)) { return; }
        $url = wp_get_attachment_url($att_id);
        if ($url) {
            $this->show_file($url);
        }
        exit;
    }

    protected function show_file($url) {
        header('Access-Control-Allow-Origin: *');
        echo file_get_contents($url);
        exit;
    }

}

$obj = new Cors_Media;
$obj->init();