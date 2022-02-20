#stage 1
FROM node:16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/web /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
