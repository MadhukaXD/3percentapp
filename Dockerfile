#!/bin/bash
FROM node:10.15-alpine as node
WORKDIR /app
COPY . .
COPY package.json .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /app/build /usr/share/nginx/html/app
