import { searchUserAccountByEmailUseCase } from "../../src/use-case/searchUserAccountByEmail.js";

console.log(searchUserAccountByEmailUseCase('teste@teste.com'))
console.log(searchUserAccountByEmailUseCase('nao.existe@email.com'))