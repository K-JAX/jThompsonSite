<?php
/**
 * Add GraphQL resolvers
 *
 * @package JTA
 */
 
// check if WPGraphQL plugin is active.
if ( function_exists( 'register_graphql_field' ) ) {
	// Add header menu resolver.
    // require_once 'resolvers/header-menu.php';

    // Add favicon
    require_once 'resolvers/favicon.php';

    // Check Site Mode
    require_once 'resolvers/site-status.php';
    
    // Add project type resolver
    require_once 'resolvers/project-type.php';
    
    // Add project single resolver
    require_once 'resolvers/project-single.php';

    // Add media source logo resolver
    require_once 'resolvers/media-source.php';

    // Add press release fields resolver
    require_once 'resolvers/press-article-single.php';
}