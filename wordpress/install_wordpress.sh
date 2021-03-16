#!/usr/bin/env sh

chsh -s /bin/bash www-data

set -e

mysql_ready='nc -z db-headless 3306'

if ! $mysql_ready
then
    printf 'Waiting for MySQL.'
    while ! $mysql_ready
    do
        printf '.'
        sleep 1
    done
fi

sudo chown -R www-data:www-data /var/www/html

sudo -i -u www-data bash << EOF

    cd /var/www/html

    wp core download

    [ -f wp-config.php ] || wp config create \
        --dbhost="$WORDPRESS_DB_HOST" \
        --dbname="$WORDPRESS_DB_NAME" \
        --dbuser="$WORDPRESS_DB_USER" \
        --dbpass="$WORDPRESS_DB_PASSWORD"

    wp core install \
        --url="$WORDPRESS_URL" \
        --title="$WORDPRESS_TITLE" \
        --admin_user="$WORDPRESS_ADMIN_USER" \
        --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
        --admin_email="$WORDPRESS_ADMIN_EMAIL" \
        --skip-email

    wp option update blogdescription "$WORDPRESS_DESCRIPTION"
    
    wp rewrite structure "$WORDPRESS_PERMALINK_STRUCTURE"

    wp theme activate jThompsonArch-backend-theme

    wp theme delete twentysixteen twentyseventeen twentynineteen twentytwenty

    wp plugin delete akismet hello

    wp plugin install --activate --force \
        acf-to-wp-api \
        advanced-custom-fields \
        custom-post-type-ui \
        wordpress-importer \
        wp-rest-api-v2-menus \
        jwt-authentication-for-wp-rest-api \
        https://github.com/wp-graphql/wp-graphql/archive/master.zip \
        https://github.com/wp-graphql/wp-graphql-jwt-authentication/archive/v0.3.1.zip \
        /var/www/plugins/*.zip

    wp server --host=0.0.0.0

EOF

