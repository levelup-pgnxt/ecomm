import mongoose from 'mongoose';

const HOST = process.env.MONGO_PRODUCT_HOST || '127.0.0.1';
const USER = process.env.MONGO_PRODUCT_USER || 'admin';
const PASSWORD = process.env.MONGO_PRODUCT_PASSWORD || 'secret';
const DATABASE = process.env.MONGO_PRODUCT_DATABASE || 'ecomm-account';
const PORT = process.env.MONGO_PRODUCT_PORT || '27017';

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}?authSource=admin`);

// mongoose.connect('mongodb://admin:secret@127.0.0.1:27017/ecomm-account?authSource=admin');
// mongoose.connect('mongodb://admin:secret@ecomm-mongodb:27017/ecomm-account?authSource=admin');

const db = mongoose.connection;

export default db;
