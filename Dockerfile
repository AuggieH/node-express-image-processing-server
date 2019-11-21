FROM node:12.13.0-alpine

ENV APP_DIR /src/app

RUN mkdir -p $APP_DIR

WORKDIR $ {APP_DIR}

RUN apk add graphicsmagick=1.3.32-r0

ADD ./package.json .

RUN npm install

COPY . .

RUN chown -R node:node client api

USER node

