#!/bin/bash

# Get all of the environment variables
if [ -f .env ]
then
  export $(cat .env | sed 's/(\|)//g' | xargs)
fi

# echo $WORDPRESS_DB_NAME

# pod network
podman network create \
    --subnet 192.5.0.0/16 \
    jThompsonSiteNet

# podman pod create --name=icm --share cgroup,ipc,uts

NAME='db-headless'
podman run \
    --name $NAME \
    --network jThompsonSiteNet \
    -e MYSQL_RANDOM_ROOT_PASSWORD='yes' \
    -e MYSQL_DATABASE=$WORDPRESS_DB_NAME \
    -e MYSQL_USER=$WORDPRESS_DB_USER \
    -e MYSQL_PASSWORD=$WORDPRESS_DB_PASSWORD \
    --add-host db-headless:127.0.0.1 \
    -p 3307:3306 \
    -d mariadb:latest

# # Function to search for alive message from podman exec
# # mysql_port_status(){
# #     podman exec -it $NAME mysqladmin pin -h 127.0.0.1 | grep "alive"
# # }

# # # Function that loops every 3 seconds until mysql container is up and running
# # import_sql_when_ready(){
# #     sleep 3
# #     mysql_port_status
# #     if [ $? -eq 0 ]
# #     then
# #         echo 'yes its running...'
# #         podman exec --log-level debug  -i $NAME mysql -ublugiant_icm_inv -pRxnweRFv -h127.0.0.1 --protocol=tcp --port=3306 blugiant_icm_inv < ./config/mysql/mysql-dump/blugiant_icm_inv.sql
# #     else
# #         echo 'waiting for mysql container to run'
# #         import_sql_when_ready
# #     fi
# # }
# # import_sql_when_ready

NAME='wp-headless'
podman build .
podman run \
    --name $NAME \
    -v ./wordpress:/var/www/html \
    -v ./docker/install_wordpress.sh:/usr/local/bin/install_wordpress \
    -v ./docker/migratedb_import.sh:/usr/local/bin/migratedb_import \
    -v ./docker/postlightheadlesswpstarter.wordpress.xml:/var/www/postlightheadlesswpstarter.wordpress.xml \
    -v ./docker/plugins:/var/www/plugins \
    --privileged \
    --network jThompsonSiteNet \
    --env-file=.env \
    --add-host db-headless:127.0.0.1 \
    -p 8080:80 \
    -d wordpress:latest

podman exec --log-level debug  -i $NAME install_wordpress && apache2-foreground

NAME='phpmyadmin'
podman run \
    --name $NAME \
    --network jThompsonSiteNet \
    -e PMA_HOST=db-headless \
    -e PMA_USER=$WORDPRESS_DB_USER \
    -e PMA_PASSWORD=$WORDPRESS_DB_PASSWORD \
    -e PHP_UPLOAD_MAX_FILESIZE=1G \
    -e PHP_MAX_INPUT_VARS=1 \
    --add-host db-headless:127.0.0.1 \
    -p 8001:80 \
    -d phpmyadmin/phpmyadmin:5
