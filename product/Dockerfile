FROM node:18
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
COPY . .
RUN npm install express-async-errors
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
