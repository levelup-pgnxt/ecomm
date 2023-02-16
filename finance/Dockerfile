FROM node:18
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
RUN npm install express-async-errors
COPY . .
EXPOSE 3002
ENTRYPOINT ["npm", "start"]
