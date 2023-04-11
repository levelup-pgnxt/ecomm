import mongoose from "mongoose";


const enderecoSchema = new mongoose.Schema(
  {   
      _id: false,
      rua_endereco: {type: String, required: true},
      n_endereco: {type: String, required: true},
      complemento: {type: String},
      cep: {type: String},
      cidade: {type: String, required: true},
      estado: {type: String, required: true},
  }
);

const accountSchema = new mongoose.Schema(
  {
      nome: {type: String, required: true},
      email: {type: String, required: true},
      senha: {type: String},
      dataCriacao: {type: String},
      cpf: {type: String},
      telefone:{type: String},
      endereco: { type: enderecoSchema, required: true},
  }
);

const accounts = mongoose.model('users', accountSchema);

export default accounts;