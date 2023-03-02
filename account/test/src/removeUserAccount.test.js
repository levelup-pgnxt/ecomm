/* eslint-disable no-console */
import removeUserUseCase from '../../src/use-case/removeUserAccount.js';
import searchUserAccountByEmailUseCase from '../../src/use-case/searchUserAccountByEmail.js';

console.log(removeUserUseCase('teste@teste.com'));
console.log(searchUserAccountByEmailUseCase('teste@teste.com'));
