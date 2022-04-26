FROM node:16.13.0-alpine as node

# set working directory
WORKDIR /app

COPY . .

# install app dependencies
COPY package.json .
RUN npm install 
RUN npm run build --prod

# add app
FROM nginx:alpine
COPY --from=node /app/build /usr/share/nginx/html