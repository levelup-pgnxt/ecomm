import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    id: false,
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String },
    bairro: { type: String },
    cep: {
      type: Number,
      validate: {
        validator: (cpf) => /^\d{8}$/.test(cpf),
        message: 'O CEP deve conter apenas números e precisa obrigatoriamente ter 8 números.',
      },
    },
    cidade: { type: String, required: true },
    estado: {
      type: String,
      required: true,
      validate: {
        validator: (uf) => /^(AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO)$/.test(uf),
        message: 'UF inválida.',
      },
    },
  },
);

const orderSchema = new mongoose.Schema(
  {
    createdDate: { type: Date },
    clienteId: { type: mongoose.Types.ObjectId, required: true },
    enderecoDeEntrega: { type: addressSchema, required: true },
    itens: { type: Array, required: true },
    status: { type: String, required: true },
  },
);

const orders = mongoose.model('orders', orderSchema);

export default orders;
