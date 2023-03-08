/* eslint-disable no-console */
import changeUserNameUseCase from '../../src/use-case/changeUserName.js';
import searchUserAccountByEmailUseCase from '../../src/use-case/searchUserAccountByEmail.js';

console.log(changeUserNameUseCase('teste@teste.com', 'Matheus Leme'));
console.log(searchUserAccountByEmailUseCase('teste@teste.com'));
