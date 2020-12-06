#!/bin/bash sh

echo "Checking if installed first"
if npm list | grep gatsby-source-wordpress
then
    gatsby develop -H 0.0.0.0
else

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

    npm i
    gatsby develop -H 0.0.0.0

fi
