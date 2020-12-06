#!/bin/bash sh



echo "checking wordpress"
# wordpress_ready='nc -z wp-headless 8080'
wordpress_ready='curl -s --head  --request GET localhost:8080'

if ! $wordpress_ready
then
    printf 'Waiting for Wordpress.'
    while ! $wordpress_ready
    do
        printf '.'
        sleep 1
    done
fi

echo "Checking if installed first"
if [ -d node_module ]; then
    echo "Node modules are installed!"
    gatsby develop -H 0.0.0.0
else
    echo "Node modules not installed yet!"
    npm i
    gatsby develop -H 0.0.0.0

fi
