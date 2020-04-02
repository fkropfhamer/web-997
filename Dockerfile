FROM node:13-alpine as build

WORKDIR /build

COPY . /build

RUN yarn
RUN yarn test
RUN yarn build

FROM node:13-alpine

ENV NODE_ENV production

COPY --from=build /build/package.json .
COPY --from=build /build/yarn.lock .

RUN yarn

WORKDIR /app

COPY --from=build /build/dist /app/dist
COPY --from=build /build/views /app/views

EXPOSE 3000

ENTRYPOINT [ "node" ]

CMD [ "/app/dist/app.js" ]
