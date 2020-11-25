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