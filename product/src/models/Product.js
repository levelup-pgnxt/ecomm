import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        descricao: {type: String},
        slug: {type: String, required: true},
        precoUnitario: {type: Number, required: true},
        qtdEmEstoque: {type: Number, required: true},
        categoria: {type: String},
    },
    {
      versionKey: false
    }
);

const products = mongoose.model("products", productSchema);

export default products;