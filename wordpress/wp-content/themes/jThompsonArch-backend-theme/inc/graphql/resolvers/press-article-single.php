<?php
/**
 * @package JTA
 */

 
add_action( 'graphql_register_types', 'press_article_meta_graphql_register');
function press_article_meta_graphql_register() {
    
    register_graphql_field( 'pressArticle', 'ctaText', [
        'type'  =>  'String',
        'description' => __( 'Where the project was created.' ),
        'resolve'       => function( $post ) {
            $cta_text = get_post_meta( $post->ID, 'call_to_action_text')[0];
            return $cta_text;
        }
    ]);
    register_graphql_field( 'pressArticle', 'PDF_File', [
        'type'  =>  'String',
        'description' => __( 'Where the project was created.' ),
        'resolve'       => function( $post ) {
            $file = wp_get_attachment_url(get_post_meta( $post->ID, 'publication_pdf_upload')[0]);
            return $file;
        }
    ]);
    
}