if [ -f .env ]
then
  export $(cat .env | sed 's/(\|)//g' | xargs)
fi
# echo "$WORDPRESS_ADMIN_USER"
echo $WORDPRESS_DESCRIPTION

# cat .env
# printenv