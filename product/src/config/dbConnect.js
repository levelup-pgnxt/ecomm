import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm-product?authSource=admin');

// eslint-disable-next-line max-len
// para rodar local é utilizado esse 127.0.0.1 depois deo secret@, para rodar no dokcer é usado o nome do serviço do docker-compose que corresponde ao banco

const db = mongoose.connection;

export default db;

// usado para conectar com o banco de dados listado na porta 27017
