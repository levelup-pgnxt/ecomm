export const accounts = [
  {
    id: 1,
    name: "usuario",
    email: "usuario@email.com",
    password: "54321",
    createdDate: "2023-01-06",
  },
  {
    id: 2,
    name: "gabi",
    email: "gabi@email.com",
    password: "12334",
    createdDate: "2023-01-06",
  },
];

export const accountsWithAddress = [
  {
    id: 1,
    name: "usuario",
    email: "usuario@email.com",
    password: "54321",
    createdDate: "2023-01-06",
    endereco: {
      logradouro: 'rua seila',
      'número': 123,
      complemento: 'nao tem',
      bairro: 'ali perto',
      cep: '133434',
      cidade: 'São Paulo',
      uf: 'SP'
    }
  },
  {
    id: 2,
    name: 'gabi',
    email: 'gabi@email.com',
    password: '12334',
    createdDate: '2023-01-06',
    endereco: {
      logradouro: 'rua dos bobos',
      numero: 0,
      complemento: '',
      bairro: 'Vale dos Unicórnios',
      cep: '1234567',
      cidade: 'Belo Horizonte',
      uf: 'MG'
    }
  },
  {
    id: 3,
    name: 'lay',
    email: 'layssa@email.com',
    password: '127334',
    createdDate: '2023-01-06',
    endereco: {
      logradouro: 'rua dos bobos',
      numero: 0,
      complemento: '',
      bairro: 'onde o vento faz a curva',
      cep: '1234568',
      cidade: 'São Paulo',
      uf: 'SP'
    }
  },
  {
    id: 4,
    name: 'roberto',
    email: 'roberto@email.com',
    password: '123354',
    createdDate: '2023-01-06',
    endereco: {
      logradouro: 'rua dos bobos',
      numero: 0,
      complemento: '',
      bairro: 'onde o vento faz a curva',
      cep: '1234569',
      cidade: 'São Paulo',
      uf: 'SP'
    }
  },
  {
    id: 5,
    name: 'usuario2',
    email: 'usuario_dois@email.com',
    password: '123354',
    createdDate: '2023-01-06',
    endereco: {
      logradouro: 'rua dos bobos',
      numero: 0,
      complemento: '',
      bairro: 'onde o vento faz a curva',
      cep: '1234569',
      cidade: 'Recife',
      uf: 'PE'
    }
  }
];
