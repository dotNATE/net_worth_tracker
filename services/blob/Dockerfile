FROM node:18.17.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

RUN npm run build
CMD npm run start