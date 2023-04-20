import mongoose from 'mongoose';

const HOST = process.env.MONGO_ACCOUNT_HOST;
const USER = process.env.MONGO_ACCOUNT_USER;
const PASSWORD = process.env.MONGO_ACCOUNT_PASSWORD;
const DATABASE = process.env.MONGO_ACCOUNT_DATABASE;
const PORT = process.env.MONGO_ACCOUNT_PORT;

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}?authSource=admin`);

const db = mongoose.connection;

export default db;
