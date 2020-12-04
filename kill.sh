#!/bin/bash

# Redhat/Fedora/CentOS
if [ -f /etc/redat-release ]
then
    SOFTWARE='podman'
elif [[ -f /etc/debian_version || "$OSTYPE" == "darwin"* ]]
then
    SOFTWARE='docker'
fi

# $SOFTWARE stop --all && \
# $SOFTWARE stop $($SOFTWARE ps -aq) && \
"$SOFTWARE"-compose down && \
yes | $SOFTWARE system prune && \
yes | $SOFTWARE volume prune