<?php

// Project taxonomies
add_action('init', 'project_taxonomy_init', 0);
function project_taxonomy_init() {

    // Project Type Category Tax
    $type_labels = array(
        'name'  => _x( 'Types', 'taxonomy general name'),
        'singular_name'  => _x( 'Project Type', 'taxonomy singular name' ),
        'search_items'  => __( 'Search project types'),
        'all_items'     => __('All project types'),
        'edit_item'     => __( 'Edit project type'),
        'update_item'   => __( 'Update project type'),
        'add_new_item'  => __( 'Add new project type'),
        'new_item_name' => __( 'New project type')

    );

    $type_args = array(
        'hierarchical'      => true,
        'labels'            => $type_labels,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'show_in_graphql'       => true,
        'graphql_single_name' => 'ProjectType',
        'graphql_plural_name' => 'ProjectTypes',
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'project_type'),

    );
    register_taxonomy( 'project_type', array('project'), $type_args);

    // Project Style Tag Tax
    $style_labels = array(
        'name'  => _x( 'Style', 'taxonomy general name'),
        'singular_name'  => _x( 'Project Style', 'taxonomy singular name' ),
        'search_items'  => __( 'Search project styles'),
        'all_items'     => __('All project styles'),
        'edit_item'     => __( 'Edit project style'),
        'update_item'   => __( 'Update project style'),
        'add_new_item'  => __( 'Add new project style'),
        'new_item_name' => __( 'New project style')

    );

    $style_args = array(
        'hierarchical'      => false,
        'labels'            => $style_labels,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'show_in_graphql'       => true,
        'graphql_single_name' => 'Style',
        'graphql_plural_name' => 'Styles',
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'project_style'),

    );
    register_taxonomy( 'project_style', array('project'), $style_args);

    // Project Material Tag Tax
    $material_labels = array(
        'name'  => _x( 'Material', 'taxonomy general name'),
        'singular_name'  => _x( 'Project Material', 'taxonomy singular name' ),
        'search_items'  => __( 'Search project materials'),
        'all_items'     => __('All project materials'),
        'edit_item'     => __( 'Edit project material'),
        'update_item'   => __( 'Update project material'),
        'add_new_item'  => __( 'Add new project material'),
        'new_item_name' => __( 'New project material')

    );

    $material_args = array(
        'hierarchical'      => false,
        'labels'            => $material_labels,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'show_in_graphql'       => true,
        'graphql_single_name' => 'Material',
        'graphql_plural_name' => 'Materials',
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'project_materials'),

    );
    register_taxonomy( 'project_material', array('project'), $material_args);

}

// Team Member taxonomy
add_action('init', 'team_member_taxonomy_init', 0);
function team_member_taxonomy_init() {
    // Team member roles
    $member_labels = array(
        'name'  => _x( 'Member Role', 'taxonomy general name'),
        'singular_name'  => _x( 'Member Role', 'taxonomy singular name' ),
        'search_items'  => __( 'Search Team Member Roles'),
        'all_items'     => __('All team member roles'),
        'edit_item'     => __( 'Edit Team Member Role'),
        'update_item'   => __( 'Update Team Member Role'),
        'add_new_item'  => __( 'Add Team Member Role'),
        'new_item_name' => __( 'New Team Member Role')
    );
    $member_args = array(
        'hierarchical'  => true,
        'labels'        => $member_labels,
        'show_ui'       => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'show_in_graphql'       => true,
        'graphql_single_name' => 'Role',
        'graphql_plural_name' => 'Roles',
        'query_var' => true,
        'rewrite' => array( 'slug' => 'team_member_role'),
    );
    register_taxonomy( 'team_member_role', array('team_member'), $member_args);

    // Skills tags
    $skills_labels = array(
        'name'  => _x( 'Skill', 'taxonomy general name'),
        'singular_name'  => _x( 'Skill', 'taxonomy singular name' ),
        'search_items'  => __( 'Search Team Skills'),
        'all_items'     => __('All team member skills'),
        'edit_item'     => __( 'Edit Team Skill'),
        'update_item'   => __( 'Update Team Skill'),
        'add_new_item'  => __( 'Add Team Skill'),
        'new_item_name' => __( 'New Team Skill')
    );
    $skills_args = array(
        'hierarchical'  => false,
        'labels'        => $skills_labels,
        'show_ui'       => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'show_in_graphql'       => true,
        'graphql_single_name' => 'Material',
        'graphql_plural_name' => 'Materials',
        'query_var' => true,
        'rewrite' => array( 'slug' => 'skill'),
    );
    register_taxonomy( 'skill', array('team_member'), $skills_args);
    

}

// Press Article taxonomy
add_action('init', 'press_article_taxonomy_init', 0);
function press_article_taxonomy_init() {
    $media_source_labels = array(
        'name'  => _x( 'Media Source', 'taxonomy general name'),
        'singular_name'  => _x( 'Media Source', 'taxonomy singular name' ),
        'search_items'  => __( 'Search Media Sources'),
        'all_items'     => __('All sources'),
        'edit_item'     => __( 'Edit Media Source'),
        'update_item'   => __( 'Update Media Source'),
        'add_new_item'  => __( 'Add Media Source'),
        'new_item_name' => __( 'New Media Source')
    );
    $media_source_args = array(
        'hierarchical'  => true,
        'labels'        => $media_source_labels,
        'show_ui'       => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'show_in_graphql'       => true,
        'graphql_single_name' => 'MediaSource',
        'graphql_plural_name' => 'MediaSources',
        'query_var' => true,
        'rewrite' => array( 'slug' => 'media_source'),
    );
    register_taxonomy( 'media_source', array('press_article'), $media_source_args);
}