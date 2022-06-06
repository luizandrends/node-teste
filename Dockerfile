FROM node:12-alpine

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY . ./

RUN apk update && apk add \
  curl \
  yarn

RUN yarn install --production

RUN yarn build

EXPOSE 3333

COPY ./dist ./

COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]
