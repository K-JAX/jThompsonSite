<?php
/**
 * Register GraphQL Field
 */

 add_action('graphql_register_types',
 'register_favicon');

 function register_favicon(){
	 register_graphql_field('RootQuery', 'faviconUrl', [
		 'type' => 'String',
		 'description' => __('The favicon url'),
		 'resolve' => function(){
			 return get_site_icon_url();
		 }
	 ]);
 }