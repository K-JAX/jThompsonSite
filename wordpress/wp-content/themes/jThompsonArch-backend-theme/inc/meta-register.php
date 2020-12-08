<?php

add_action( 'init', 'project_register_post_meta' );
function project_register_post_meta() {
    $cpt = 'project';
    register_post_meta( $cpt, 'project_budget_field', array(
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string'
    ));
    register_post_meta( $cpt, 'project_summary_block_field', array(
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string'
    ));
    register_post_meta( $cpt, 'project_location_block_field', array(
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string'
    ));
}