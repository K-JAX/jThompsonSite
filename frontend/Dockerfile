FROM node:12-alpine

RUN npm install --global gatsby-cli && \
    /bin/sh -c "apk add --no-cache bash"

RUN apk add --no-cache curl
    
# Create app directory
WORKDIR /home/node/app

RUN chown -R node:node /home/node/app

COPY --chown=node:node ./package*.json ./

# USER node

# RUN npm i

# Bundle app source
COPY --chown=node:node ./ .

RUN ls .

EXPOSE 8000

