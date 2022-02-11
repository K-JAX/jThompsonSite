<?php
/**
 * Registering gutenberg block
 */

//  echo get_stylesheet_directory_uri() . '/block.js';
 
function register_blocks() {
    wp_enqueue_script( 
        'jta_blocks', 
        get_stylesheet_directory_uri() . '/block.min.js', 
		array( 'wp-blocks',  'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ),
		false,
		true
    );
    
}
add_action( 'init', 'register_blocks');

function jta_block_category( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  =>  'project-blocks',
                'title' =>  __( 'Architecture Project Blocks', 'project-blocks' )
            ),
            array(
                'slug'  =>  'team-blocks',
                'title' =>  __( 'Team Member Blocks', 'team-blocks')
            )
        )
    );
}
add_filter( 'block_categories', 'jta_block_category', 10, 2);

// Template Blocks for Project
function register_project_template() {
    $post_type_object = get_post_type_object( 'project' );
    $post_type_object -> template = array(
        // array( 'jta/project-location' ), <-- this is now handled by the Google Maps API
        // array( 'jta/project-budget' ),
        array( 'jta/project-summary' )
    );
}
add_action( 'init', 'register_project_template' );


