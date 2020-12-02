FROM node:12-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app 
# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node:node frontend/package*.json .
# COPY frontend/yarn.lock .

# RUN /bin/bash -c 'chmod 775 /home/node/app/package.json'
USER node

RUN npm i -f
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node frontend/ .
RUN chmod -R 777 /home/node/app/


EXPOSE 8000
# RUN chown -Rh $user:$user 
CMD [ "npm", "run", "start" ]

FROM wordpress

# wp-cli
RUN curl -sL https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o wp; \
	chmod +x wp; \
	mv wp /usr/local/bin/; \
	mkdir /var/www/.wp-cli; \
	chown www-data:www-data /var/www/.wp-cli

# composer
RUN curl -sL https://raw.githubusercontent.com/composer/getcomposer.org/master/web/installer | php; \
	mv composer.phar /usr/local/bin/composer; \
	mkdir /var/www/.composer; \
	chown www-data:www-data /var/www/.composer

# phpunit, phpcs, wpcs
RUN sudo -u www-data composer global require \
	phpunit/phpunit \
	dealerdirect/phpcodesniffer-composer-installer \
	phpcompatibility/phpcompatibility-wp \
	automattic/vipwpcs

RUN chown -R www-data:www-data /var/www/html
# include composer-installed executables in $PATH
ENV PATH="/var/www/.composer/vendor/bin:${PATH}"

EXPOSE 8080
