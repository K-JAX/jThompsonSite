FROM node:14-alpine

RUN apk update && apk add bash

WORKDIR /home/node/app

COPY --chown=node:node package.json .
# COPY --chown=node:node yarn.lock .

RUN chown -R node:node /home/node/app

# USER node

RUN yarn install

COPY --chown=node:node ./ .

RUN chmod -R 777 /home/node/app

EXPOSE 3001