
FROM node:18-alpine 
WORKDIR /app-ecomm/account
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3004
ENTRYPOINT npm start
