
FROM node:18-alpine 
WORKDIR /app-ecomm/account
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3004
ENTRYPOINT npm start
# FROM: baixar o node
# WORKDIR: pasta dentro do dokcer
# copiar tudo do diretório do pc local para o docker
# expondo a porta 3000
# 







#FROM node:14
#WORKDIR /app-node
#COPY . .
#RUN npm install
#ENTRYPOINT npm start
#teste