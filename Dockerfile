FROM ubuntu:latest
FROM node:16.15.0
WORKDIR /var/www
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD node src/express.js