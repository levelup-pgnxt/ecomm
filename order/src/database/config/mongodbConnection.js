import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:secret@ecomm-mongo:27017/ecomm-order?authSource=admin');
const db = mongoose.connection;

export default db;