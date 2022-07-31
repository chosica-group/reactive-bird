FROM node:16.15.0
WORKDIR /var/www1
COPY . .
RUN npm install && npm run build:prod
EXPOSE 3000
CMD node dist/server.js NODE_ENV=production