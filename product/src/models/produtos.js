import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: { type: String },
    produto: {
      type: String,
      required: true,
      minlength: 3,
      match: /^\D+\w{2,}$/,
    },
    descricao: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      match: /^[A-Za-z0-9]*$/,
    },
    preco_unitario: {
      type: mongoose.Types.Decimal128,
      min: 0.01,
    },
    quantidade: {
      type: Number,
      min: 1,
      max: 10000,
      required: true,
    },
    categoria: { type: String, ref: 'categoria', required: true },
  },
);

const products = mongoose.model('products', productSchema);

export default products;
