import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:secret@127.0.0.1:27017/ecomm?authSource=admin');
// mongoose.connect('mongodb://admin:secret@ecomm-mongodb:27017/ecomm?authSource=admin');

const db = mongoose.connection;

export default db;
