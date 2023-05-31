import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema(
  {
    id: { type: String },
    NOME:
    {
      type: String,
      minLength: 3,
      match: /^[a-zA-Z][a-zA-Z0-9]*/,
      required: true,

    // metodo elegante "forked" de um amigo
    },
    STATUS: { type: String },
  },
);

const categoryModel = mongoose.model('category', categoriesSchema);

export default categoryModel;

// modelo de categoria, ao cadastrar um modelo ou "olhar" ele deve seguri esse modelo
