import mongoose from 'mongoose';
import 'mongoose-type-email';

mongoose.SchemaTypes.Email.defaults.message = 'Endereço de Email inválido!';

const userSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  senha: { type: String, required: true },
  data: { type: Date, default: Date.now },
  cpf: { type: String, required: true },
  telefone: { type: String, required: true },
  endereco: {
    logradouro: { type: String, required: true },
    numero: { type: String, required: true },
    complementos: { type: String },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    uf: { type: String, required: true },
    cep: { type: String, required: true },
  },
  carrinho: {
    produtos: [
      {
        id: { type: String },
        nome: { type: String },
        precoUnitario: { type: Number },
        desconto: { type: Number },
        qtdeItem: { type: Number },
        valorDescontos: { type: Number },
        subTotal: { type: Number },
        subTotalLiquido: { type: Number },
      },
    ],
  },
}, {
  versionKey: false,
});

const users = mongoose.model('users', userSchema);

export default users;
