import mongoose from 'mongoose';

const HOST = process.env.MONGO_PRODUCT_HOST;
const USER = process.env.MONGO_PRODUCT_USER;
const PASSWORD = process.env.MONGO_PRODUCT_PASSWORD;
const DATABASE = process.env.MONGO_PRODUCT_DATABASE;
const PORT = process.env.MONGO_PRODUCT_PORT;

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}?authSource=admin`);

const db = mongoose.connection;

export default db;
