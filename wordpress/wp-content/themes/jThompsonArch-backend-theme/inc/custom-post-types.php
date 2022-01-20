<?php
/**
 * JTA Custom Post types
 *
 * @package JTA
 */

// Project post type
add_action('init', 'project_init');
function project_init() {
    $labels = array(
        'name'          => _x('Projects', 'post type general name', 'jta'),
        'singular_name' => _x('Project', 'post type singular name', 'jta'),
        'menu_name'     => _x('Projects', 'admin menu', 'jta'),
    );

    $args = array(
        'labels'              => $labels,
        'description'         => __('Architectural Project post types to display on projects page and featured on homepage.', 'jta'),
        'public'              => true,
        'can_export'          => true,
        'capability_type'     => 'post',
        'description'         => 'All architectural projects found under portfolio.',
        'publicly_queryable'  => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-admin-multisite',
        'show_ui'             => true,
        'show_in_admin_bar'   => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'Project',
        'graphql_plural_name' => 'Projects',
        'rewrite'             => array('slug' => 'portfolio'),
        'has_archive'         => 'projects',
        'hierarchical'        => false,
        'supports'            => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'custom-fields'),
    );

    register_post_type('project', $args);
}

// // Team post type
// add_action('init', 'team_member_init');
// function team_member_init() {
//     $labels = array(
//         'name'      => _x( 'Team Members', 'post type general name', 'jta'),
//         'singular_name' => _x('Team Member', 'post type singular name', 'jta'),
//         'menu_name'  => _x( 'Team Members', 'admin menu', 'jta')
//     );

//     $args = array(
//         'labels'    =>  $labels,
//         'description'   => __( 'Members of the JTA Team.',  'jta'),
//         'public'    => true,
//         'publicly_queryable'    => true,
//         'menu_position'         => 6,
//         'menu_icon'             => 'dashicons-groups',
//         'show_ui'               => true,
//         'show_in_menu'          => true,
//         'show_in_rest'          => true,
//         'show_in_graphql'       => true,
//         'graphql_single_name'   => 'TeamMember',
//         'graphql_plural_name'   => 'TeamMembers',
//         'has_archive'           => true,
//         'hierarchical'          => false,
//         'supports'              => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
//     );

//     register_post_type('team_member', $args);
// }

// Press Release post type
add_action('init', 'press_article_init');
function press_article_init() {
    $labels = array(
        'name'          => _x('Press Articles', 'post type general name', 'jta'),
        'singular_name' => _x('Press Article', 'post type singular name', 'jta'),
        'menu_name'     => _x('Press Articles', 'admin menu', 'jta'),
    );

    $args = array(
        'labels'              => $labels,
        'description'         => __('Press articles about JTA Team.', 'jta'),
        'public'              => true,
        'publicly_queryable'  => true,
        'menu_position'       => 7,
        'menu_icon'           => 'dashicons-media-document',
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'PressArticle',
        'graphql_plural_name' => 'PressArticles',
        'rewrite'             => array('slug' => 'press'),
        'has_archive'         => "press",
        'hierarchical'        => false,
        'supports'            => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
    );

    register_post_type('press_article', $args);
}

// add_filter( 'jwt_auth_whitelist', function ( $endpoints ) {
//     return array(
//         '/wp/v2/project/*'
//     );
// } );