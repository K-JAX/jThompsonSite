
#!/bin/bash
# Basic if statement
if [ ! $(wp core verify-checksums) ]
then
    # wp core download --force
    echo 'corret, latest wordpress is not installed in this folder'
fi

