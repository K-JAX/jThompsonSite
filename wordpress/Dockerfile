FROM wordpress

RUN sed -i 's/80/8080/' /etc/apache2/ports.conf /etc/apache2/sites-enabled/000-default.conf

RUN mv "$PHP_INI_DIR"/php.ini-development "$PHP_INI_DIR"/php.ini

# install_wordpress.sh & misc. dependencies
RUN apt-get update; \
	apt-get install -yq mariadb-client netcat sudo less git unzip

# wp-cli
RUN curl -sL https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o wp; \
	chmod +x wp; \
	mv wp /usr/local/bin/; \
	mkdir /var/www/.wp-cli; \
	chown www-data:www-data /var/www/.wp-cli

WORKDIR /var/www/html

COPY --chown=www-data:www-data ./install_wordpress.sh .

RUN chown -R www-data:www-data /var/www/html

EXPOSE 8080