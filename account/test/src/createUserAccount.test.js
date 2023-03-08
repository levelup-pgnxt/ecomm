import createUserUseCase from '../../src/use-case/createUserAccount.js';

const matheus = createUserUseCase('Matheus', 'email@email.com.br', 'EssaEUmaSenha');
// eslint-disable-next-line no-console
console.log(matheus);
