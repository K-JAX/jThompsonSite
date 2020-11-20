#!/bin/bash

# For Linux Distros - Redhat, Fedora, and CentOS
if [ -f /etc/redhat-release ]; then
    bash ./podman/redhatStart.sh

# For Linux Distros - Debian, *Ubuntu, and Mint. Also for MacOS
elif [ "$(grep -Ei 'debian|buntu|mint' /etc/*release)" || "$OSTYPE" == "darwin"* ]; then
    docker-compose up -d
fi

