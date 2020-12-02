<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_headless' );

/** MySQL database username */
define( 'DB_USER', 'wp_headless' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wp_headless' );

/** MySQL hostname */
define( 'DB_HOST', 'db-headless' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '0!V2#}Iz+NYf[j~[K2S?+Umv2iUFG$diwhbQ`,L($2g-.Uv&4dJ7b,5+7)E^+2Bx' );
define( 'SECURE_AUTH_KEY',   'lAU84~Y.(h:/-rs69*&p.HNARu+V}tAN6NKXH^Z[ns^DHjL?i-rxJQH}3U]>3(BV' );
define( 'LOGGED_IN_KEY',     'D4AxZjdwEQE!r,%|NWYjT*Y_,e]5q.&sPOVgPLgZ>=Gi{z}07vkFOzX4C(3P);s=' );
define( 'NONCE_KEY',         '(!C/[ECp*1wd(g?V%?x5^oVUe3Z@;zhHwV;MCFB4hB&D$R)Bt#PZ$f+A_i~78*W9' );
define( 'AUTH_SALT',         'n|7Xb=p9O.|P3|C<5rAJGKyJq-[0g7?H)u9,Z=q%F.6j^$tp.-aTvs^rt(9L/oYj' );
define( 'SECURE_AUTH_SALT',  'x`G~-/h5@2!`_]_A-I)FRE)KsubRE&/_A#ve0{O-!It.AZ)ItrD,-<^c3I>lb=[t' );
define( 'LOGGED_IN_SALT',    'i~gg#6C[?E1x4@&%9`d=w]NU#z:iF&] ct!SKYJTc0*EElmVARE64$faSKW84U;C' );
define( 'NONCE_SALT',        'lf^-f/M[E<Ohpc8KTMyRYf?!SF655f2/l6y+CdA Vg^.)J#|z)8I%RpB>3V5 PQ5' );
define( 'WP_CACHE_KEY_SALT', '3fXLx[]Q>9R`?o/:HsMyh,<8+U;ndn+w)@@t?,8xP[J:5,~|i*TF^iiS(X5k)D:h' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
