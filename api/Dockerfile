
FROM node:16-alpine
COPY . /src
WORKDIR /src
RUN npm install --production
EXPOSE 4000

CMD ["npm", "start"]
