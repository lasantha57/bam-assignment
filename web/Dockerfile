FROM node:alpine

COPY . /src

WORKDIR /src

RUN npm install --production

EXPOSE 4200

CMD ["npm", "start"]
