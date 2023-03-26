
FROM node:18-alpine 
WORKDIR /app-ecomm/finance
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3001
ENTRYPOINT npm start