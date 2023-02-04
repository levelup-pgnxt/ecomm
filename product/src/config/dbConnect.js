import mongoose from "mongoose"

mongoose.connect("mongodb+srv://adm:pass123@cluster0.ovjlpse.mongodb.net/ecomm");

let db = mongoose.connection;

export default db;