<?php
/**
 * Add Graphql resolver for coming soon mode
 */
add_action('graphql_register_types', 'register_coming_soon');
   
function register_coming_soon(){
	register_graphql_field('RootQuery', 'siteStatus', [
		'type' => 'String',
		'description' => __('The Site Status from Seed Prod plugin'),
		'resolve' => function(){
			$ts = get_option('seedprod_settings');
			$seedprod_settings = json_decode($ts, true);
			$text = '';
			if (!empty($seedprod_settings['enable_coming_soon_mode'])) {
				$text = 'Coming Soon Mode Active';
			} elseif (!empty($seedprod_settings['enable_maintenance_mode'])) {
				$text = 'Maintenance Mode Active';
			}
			return $text;
		}
	]);
}