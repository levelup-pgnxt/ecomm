import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    status: { type: String },
  },
);

const categorias = mongoose.model('categories', categoriaSchema);

export default categorias;
