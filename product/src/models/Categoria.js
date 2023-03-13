import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    status: { type: String },
  },
);

const Categoria = mongoose.model('categories', categoriaSchema);

export default Categoria;
