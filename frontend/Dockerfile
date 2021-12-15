FROM node:14-alpine

RUN apk update && apk add bash

WORKDIR /home/node/app

COPY --chown=node:node ./ .

RUN chown -R node:node /home/node/app

RUN npm i

