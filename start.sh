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

export USERID=${UID} 
export GROUPID=$(id -g $whoami)
"$SOFTWARE"-compose up -d --build