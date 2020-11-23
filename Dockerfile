FROM node:12

# Create app directory
WORKDIR /usr/src/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY frontend/package.json  /usr/src/
COPY frontend/yarn.lock /usr/src/

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY frontend/dist /usr/src/
COPY frontend/src /usr/src/
COPY frontend/webpack.config.js /usr/src/
COPY frontend/.babelrc /usr/src/

RUN /bin/bash -c 'chmod -R 777 /usr/src/dist'
EXPOSE 8080
USER node
# RUN chown -Rh $user:$user 
CMD [ "yarn", "start" ]