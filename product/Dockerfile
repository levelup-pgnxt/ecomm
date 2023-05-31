
FROM node:18-alpine 
WORKDIR /app-ecomm/product
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000
ENTRYPOINT npm start
