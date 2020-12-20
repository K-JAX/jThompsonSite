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
define( 'DB_NAME', 'wp_headless');

/** MySQL database username */
define( 'DB_USER', 'wp_headless');

/** MySQL database password */
define( 'DB_PASSWORD', 'wp_headless');

/** MySQL hostname */
define( 'DB_HOST', 'db-headless');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '');

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'HYFAa>~Q,<E3PeV/.4#[ow&pbc,X6LOz]0W^&/ss!:_Pt>N:|yqp6(XYi0:hWp?K' );
define( 'SECURE_AUTH_KEY',   'Z@&}Jp?-$R|Nb_8RnX4I`kJK94,I|oh0 Zlgu>p*lJB%):a#i55TQTm!>uA^>Ve=' );
define( 'LOGGED_IN_KEY',     '7jK!t*?M}=[Hc$>8!rjD:ai((8STO9`y*ij3XF=3_+NX?h_Xdr]0ngH?}RZml4zH' );
define( 'NONCE_KEY',         'II.UquTSj]/4y8RRFzPnX0bjE#C9YARlhV{~/kC<k. ~}6tkJ&L9l 4L|vfIk8u*' );
define( 'AUTH_SALT',         '/i~y7O,7_>n.?Ve+)YpYk|W2s:Nh(T(PKo&;_^{V<n{&Z=j:Hp+ uy~mFf^Bx3Xk' );
define( 'SECURE_AUTH_SALT',  ']+8MneLu2134CE[M;j?l2HyRAeaNQcgV)G{TK%p$m/=ziF;EGLEdl#^S>{]~FqZH' );
define( 'LOGGED_IN_SALT',    'RAWwgJfQ^`LP`@&*NwW-=JaFy+s,M(3Ec{3RU*X*Qri*X7l;]9;YR?p43b%:zgp(' );
define( 'NONCE_SALT',        'WFWYL^J/h+23nScp?>sF$5uZBGm=um_UXoxHB+Gzhjc]9zEvXi*h)fh`=cIR]%D-' );
define( 'WP_CACHE_KEY_SALT', 'Xk-&:Y`9Qxzw>4m;zJK/48B%tZ?GyWG*c9,08!.Y(hR-MH+2hOgJ~&Lt;kx3qO61' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

define('JWT_AUTH_CORS_ENABLE', true);

define('FS_METHOD','direct');
define('WP_DEBUG', true);
define( 'GRAPHQL_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
