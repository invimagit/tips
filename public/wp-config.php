<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tips_digital' );


/** Database username */
define( 'DB_USER', 'user_t1ps' );

/** Database password */
define( 'DB_PASSWORD', 'dbpass_t1ps' );

/** Database hostname */
define( 'DB_HOST', '172.30.233.192' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'X:N;@7sOV#>mh54;Vpig;/wmgfWj3Jp}M`<aK/)oH/LUQn^&Jr/ZKDc>E/=m9j:?');
define('SECURE_AUTH_KEY',  '@kKV*rHtooAR7w_aD8D[|Dw$H-e(g(-N.Phd1,8-QF7{Ze9Xl,kp|D)Gr=~QiU[v');
define('LOGGED_IN_KEY',    '#cuVxRml7k!<mBH8V&(;r.;axY*D^e@= iuoEObjY3!7Q7gR $%hTqmc):0w-6E`');
define('NONCE_KEY',        '|i=~Vr|^Yz7kcAzSm+,wiV-UeDNp8qZ1Z~N-r+s;$Wi`]+qJ[K:*ujw):xj4aIZS');
define('AUTH_SALT',        'F~?27X*$M{8W@i5TK$-Whui0>Dn|GcOEji5p3xn1m,Y~E]_M*TkO/u:,//xoP^Gv');
define('SECURE_AUTH_SALT', 'bZ!tvl<U^F!OWJKR;m_ LxsEFd~ZUJ3r5$sD5fc+dywo6+wFGX}<;O8m^b8s00;0');
define('LOGGED_IN_SALT',   'RPhf6yTatI|zichyQt+=k0a++7o#gXweo.qQ?W)|<)*bA[KbB!G` *Xb;:%&F4J+');
define('NONCE_SALT',       'Tx J,L+ok.%7zcp)I&L]mz!lD%of-Nf[+ae*GcS?8IoBIk.H9;Rv10L%0`x4Q|F~');
/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 't1ps_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';


/*
define( 'DB_NAME', 'tips_digital' );

define( 'DB_USER', 'user_t1ps' );

define( 'DB_PASSWORD', ')YCW5m$zcXvUj&-K' );

define( 'DB_HOST', '172.30.166.114' );
*/
