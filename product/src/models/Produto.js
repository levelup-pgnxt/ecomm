import mongoose from 'mongoose';
import categorias from './Categoria.js';

const categoriaSchema = new mongoose.Schema(
  {
    _id: false,
    nome: { type: String, required: true },
    idCategoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
      validate: {
        validator: async (id) => {
          const categoria = await categorias.findById(id);
          return !!categoria;
        },
        message: 'O id da categoria deve ser válido.',
      },
    },
  },
);

const produtoSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: {
      type: String,
      required: true,
      validate: {
        validator: (nome) => nome.length > 3 && !/^\d/.test(nome),
        message: 'O nome do produto deve ter mais de 3 caracteres e não pode começar com números.',
      },
    },
    descricao: { type: String },
    slug: {
      type: String,
      validate: {
        validator: (slug) => /^[a-zA-Z0-9-]+$/.test(slug),
        message: 'A slug só pode conter letras (maiúsculas e minúsculas), números e hífens.',
      },
    },
    precoUnitario: {
      type: mongoose.Types.Decimal128,
      required: true,
      validate: {
        validator: (preco) => preco > 0,
        message: 'O preço unitário deve ser maior que 0',
      },
    },
    quantidadeEmEstoque: {
      type: Number,
      required: true,
      validate: {
        validator: (quantidade) => quantidade > 0 && quantidade < 10000,
        message: 'A quantidade deve ser maior que 0 e menor que 10000.',
      },
    },
    categoria: {
      type: categoriaSchema, required: true,
    },
  },
);

const Produto = mongoose.model('products', produtoSchema);

export default Produto;
