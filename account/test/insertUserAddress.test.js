import { insertUserAddressUseCase } from "../src/use-case/insertUserAddress.js";

const endereco = {
  logradouro: 'rua dos bobos',
  numero: 0,
  complemento: '',
  bairro: 'onde o vento faz a curva',
  cep: '1234567',
  cidade: 'Belo Horizonte',
  uf: 'MG'
};

console.log(insertUserAddressUseCase('gabi@email.com', endereco));
