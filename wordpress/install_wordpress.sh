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
    echo
fi
# su - www-data
sudo -i -u www-data bash << EOF

    whoami
    cd /var/www/html



    if wp core is-installed
    then
        echo "WordPress is already installed, exiting."
        exit
    fi

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


    wp server --host=0.0.0.0

EOF


# set -e

# mysql_ready='nc -z db-headless 3306'

# if ! $mysql_ready
# then
#     printf 'Waiting for MySQL.'
#     while ! $mysql_ready
#     do
#         printf '.'
#         sleep 1
#     done
#     echo
# fi

# if wp core is-installed
# then
#     echo "WordPress is already installed, exiting."
#     exit
# fi

# # if [ ! $(wp core verify-checksums) ]
# # then
# #     wp core download --force
# # fi

# # ls -l

# wp core download --force


# [ -f wp-config.php ] || wp config create \
#     --dbhost="$WORDPRESS_DB_HOST" \
#     --dbname="$WORDPRESS_DB_NAME" \
#     --dbuser="$WORDPRESS_DB_USER" \
#     --dbpass="$WORDPRESS_DB_PASSWORD"

# wp core install \
#     --url="$WORDPRESS_URL" \
#     --title="$WORDPRESS_TITLE" \
#     --admin_user="$WORDPRESS_ADMIN_USER" \
#     --admin_password="$WORDPRESS_ADMIN_PASSWORD" \
#     --admin_email="$WORDPRESS_ADMIN_EMAIL" \
#     --skip-email


# wp server --host=0.0.0.0