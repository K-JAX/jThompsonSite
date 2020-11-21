FROM node:12

# Create app directory
WORKDIR /usr/src/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY frontend/package.json  ./
COPY frontend/yarn.lock ./

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# RUN /bin/bash -c 'chmod -R 777 /usr/src/public'
EXPOSE 8080
CMD [ "yarn", "start" ]
USER node