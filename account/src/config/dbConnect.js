import mongoose from 'mongoose';

const HOST = process.env.MONGO_ACCOUNT_HOST || '127.0.0.1';
const USER = process.env.MONGO_ACCOUNT_USER || 'admin';
const PASSWORD = process.env.MONGO_ACCOUNT_PASSWORD || 'secret';
const DATABASE = process.env.MONGO_ACCOUNT_DATABASE || 'ecomm-account';
const PORT = process.env.MONGO_ACCOUNT_PORT || '27017';

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}?authSource=admin`);

const db = mongoose.connection;

export default db;
