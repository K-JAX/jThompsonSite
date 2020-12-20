FROM node:14-alpine

RUN apk update && apk add bash

WORKDIR /home/node/app

COPY --chown=node:node package.json .
# COPY --chown=node:node yarn.lock .

RUN chown -R node:node /home/node/app

RUN yarn install

COPY --chown=node:node ./ .

RUN chmod -R 775 /home/node/app && \
	chown node:node .

USER node

EXPOSE 3001