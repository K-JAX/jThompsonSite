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

COPY --chown=www-data:www-data docker/install_wordpress.sh .

# RUN ls .
RUN mv install_wordpress.sh install_wordpress; \
    chmod +x /var/www/html/install_wordpress; \
    mv /var/www/html/install_wordpress /usr/local/bin/ ; \
    chmod +x /usr/local/bin/install_wordpress; \
    chown -R www-data:www-data /usr/local/bin ;

RUN chown -R www-data:www-data /var/www/html
# RUN find /var/www/ -type d -exec chmod 0755 {} \;
# RUN find /var/www/ -type f -exec chmod 644 {} \;

# RUN chmod -R 777 /var/www/html

# USER www-data

EXPOSE 8080