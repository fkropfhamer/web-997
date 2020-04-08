FROM node:13-alpine as build
WORKDIR /build

COPY . /build

RUN rm -rf /build/public/js 

RUN yarn
RUN yarn build



FROM nginx:1.17.4-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /build/public /build/app/static
