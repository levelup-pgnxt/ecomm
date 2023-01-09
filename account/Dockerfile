FROM node:18
WORKDIR /app/account
COPY package*.json .
RUN npm install
COPY . .
ENTRYPOINT npm start