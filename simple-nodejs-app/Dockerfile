FROM node:10-alpine
WORKDIR /app

COPY . .
EXPOSE 3000


COPY package*.json ./

RUN npm install


CMD [ "npm", "start" ]
