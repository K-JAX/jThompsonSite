<?php
/**
 * @package Degraw and Dehaan
 */

add_action( 'graphql_register_types', 'restister_media_source_srcset' );
function restister_media_source_srcset() {
    register_graphql_object_type( 'media_srcset', [
      'description' => __( "All images that exist for featured image", 'dd' ),
      'fields' => [
        'thumbnail' => [
            'type' => 'String',
            'description' => __( '150px square for thumbnails', 'dd' ),
        ],
        'medium' => [
            'type' => 'String',
            'description' => __( '300px width image', 'dd' ),
        ],
        'medium_large' => [
            'type' => 'String',
            'description' => __( '768px max-width image', 'dd' ),
        ],
        'large' => [
            'type' => 'String',
            'description' => __( '1024px max-width image', 'dd' ),
        ],
        'full' => [
            'type' => 'String',
            'description' => __( 'Original image size', 'dd' ),
        ],
        'default' => [
            'type' => 'String',
            'description' => __( 'Default image size', 'dd' ),
        ],
      ],
    ] );
}

add_action( 'graphql_register_types', 'register_media_source_featured_image');
function register_media_source_featured_image() {
    
    // get all project type terms
    $terms = get_terms('media_source', array('hide_empty' => 0 ));
    
    // for each project type
    foreach($terms as $term){

        register_graphql_field( 'MediaSource', 'logo', [
            'type' => 'media_srcset',
            'description' => __('The color of the post', 'wp-graphql' ),
            'resolve' => function($term) {
                $term_meta = array_slice(get_term_meta($term->term_id), 0, 1);

                $img =  preg_split("/,/", wp_get_attachment_image_srcset($term_meta['logo_image'][0], 'full'));
                $full_img = $img[0];
                $default =  wp_get_attachment_image_src($term_meta['logo_image'][0])[0];
                // return $img;
                return [
                    'thumbnail'     => ! empty($img[1]) ? $img[1] : $img[0],
                    'medium'        => ! empty($img[3]) ? $img[3] : $img[0],
                    'medium_large'  => ! empty($img[3]) ? $img[3] : $img[0],
                    'large'         => ! empty($img[4]) ? $img[4] : $img[0],
                    'full'          => $full_img,
                    'default'       => $default
                ];
            }
        ]);

    }
}