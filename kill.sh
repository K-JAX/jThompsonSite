#!/bin/bash

# Redhat/Fedora/CentOS
if [ -f /etc/redhat-release ]
then
    SOFTWARE='podman'
# Debian/Ubuntu/Mint/MacOS
elif [[ -f /etc/debian_version || "$OSTYPE" == "darwin"* ]]
then
    SOFTWARE='docker'
fi

# $SOFTWARE stop --all && \
# $SOFTWARE stop $($SOFTWARE ps -aq) && \
"$SOFTWARE"-compose down && \
yes | $SOFTWARE system prune && \
yes | $SOFTWARE volume prune

[[ $SOFTWARE = 'podman' ]] && yes | podman pod stop --all && yes | podman pod prune