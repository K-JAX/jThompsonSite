FROM node:12-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app ; \
    apk add --update alpine-sdk;

RUN npm install --global gatsby-cli
    
# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node:node ./package*.json ./
# COPY frontend/yarn.lock .

# RUN /bin/bash -c 'chmod 775 /home/node/app/package.json'
USER node

RUN npm i
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node ./ .
# RUN chmod -R 777 /home/node/app/

# CMD ["npm", "run", "start"]

EXPOSE 8000

