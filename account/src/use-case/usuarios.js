const usuarios = [{
  id: 1,
  nome: 'Matheus L',
  email: 'teste@teste.com',
  senha: '12456',
  createdDate: new Date().toLocaleDateString('pt-BR'),
  endereco: {
    logradouro: 'Rua Teste',
    numero: '123',
    complemento: 'Apto 1, bloco B',
    bairro: 'Jd. Teste',
    cep: '04000-000',
    cidade: 'Sao Paulo',
    uf: 'SP',
  },
},
{
  id: 2,
  nome: 'Joao B',
  email: 'naotememail@teste.com',
  senha: '1245sad6',
  createdDate: new Date().toLocaleDateString('pt-BR'),
  endereco: {
    logradouro: 'Rua Sei la',
    numero: '456',
    complemento: '',
    bairro: 'Jd. Atlas',
    cep: '00001-000',
    cidade: 'Porto Alegre',
    uf: 'RS',
  },
},
{
  id: 3,
  nome: 'Paulo S',
  email: 'emaildopaulo@teste.com',
  senha: '12456123',
  createdDate: new Date().toLocaleDateString('pt-BR'),
  endereco: {
    logradouro: 'Rua Teste',
    numero: '123',
    complemento: 'Apto 1, bloco B',
    bairro: 'Jd. Teste',
    cep: '04000-000',
    cidade: 'Sao Paulo',
    uf: 'SP',
  },
},
{
  id: 4,
  nome: 'Americo Silva',
  email: 'outroemail@teste.com',
  senha: '789456',
  createdDate: new Date().toLocaleDateString('pt-BR'),
  endereco: {
    logradouro: 'Rua Pao com Ovo',
    numero: '456',
    complemento: 'Apto 12',
    bairro: 'Jd. Alegria',
    cep: '00001-020',
    cidade: 'Salvador',
    uf: 'BA',
  },
},
{
  id: 5,
  nome: 'Welington Whasington',
  email: 'issonaoeumemail@teste.com',
  senha: 'asdbasd',
  createdDate: new Date().toLocaleDateString('pt-BR'),
  endereco: {
    logradouro: 'Rua Celular',
    numero: '5',
    complemento: '',
    bairro: 'Jd. Jardim',
    cep: '00201-020',
    cidade: 'Natal',
    uf: 'RN',
  },
}];

export default { usuarios };
