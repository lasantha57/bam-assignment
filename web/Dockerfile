FROM node:16-alpine

COPY . /src

WORKDIR /src

RUN npm install

RUN npm install -g @angular/cli

EXPOSE 4200

CMD ["npm", "start"]
