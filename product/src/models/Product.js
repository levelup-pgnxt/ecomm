import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  slug: { type: String },
  precoUnitario: { type: Number },
  estoque: { type: Number },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
  desconto: { type: Number },
}, {
  versionKey: false,
});

const products = mongoose.model('products', productSchema);

export default products;
