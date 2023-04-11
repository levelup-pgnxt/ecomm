// ## Documento usado para estudos, apagar depois de implementação

const pessoas = [
  {
    nome: 'Maria',
    idade: 30,
    email: 'maria@gmail.com',
    endereco: {
      cidade: 'São Paulo',
      estado: 'SP',
      rua: 'Rua A',
    },
  },
  {
    nome: 'João',
    idade: 25,
    email: 'joao@gmail.com',
    endereco: {
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      rua: 'Rua B',
    },
  },
  {
    nome: 'Ana',
    idade: 40,
    email: 'ana@gmail.com',
    endereco: {
      cidade: 'Belo Horizonte',
      estado: 'BA',
      rua: 'Rua C',
    },
  },
  {
    nome: 'Pedro',
    idade: 22,
    email: 'pedro@gmail.com',
    endereco: {
      cidade: 'Porto Alegre',
      estado: 'BA',
      rua: 'Rua D',
    },
  },
  {
    nome: 'Camila',
    idade: 27,
    email: 'camila@gmail.com',
    endereco: {
      cidade: 'Fortaleza',
      estado: 'CE',
      rua: 'Rua E',
    },
  },
  {
    nome: 'Lucas',
    idade: 35,
    email: 'lucas@gmail.com',
    endereco: {
      cidade: 'Recife',
      estado: 'PE',
      rua: 'Rua F',
    },
  },
  {
    nome: 'Mariana',
    idade: 20,
    email: 'mariana@gmail.com',
    endereco: {
      cidade: 'Salvador',
      estado: 'BA',
      rua: 'Rua G',
    },
  },
];

function findPessoas(pessoasToFind, estado) {
  return pessoasToFind.filter((pessoa) => pessoa.endereco.estado === estado);
}

const estado = 'BA';
const filter = findPessoas(pessoas, estado);

console.log(pessoas);
console.log(filter);
