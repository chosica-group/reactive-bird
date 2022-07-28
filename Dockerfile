FROM node:16.15.0
WORKDIR /var/www1
COPY package*.json ./
RUN npm install
RUN npm run build:prod
COPY . .
EXPOSE 3000
CMD node dist/server.js