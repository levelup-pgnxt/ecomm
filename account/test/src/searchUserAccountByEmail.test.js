import { searchUserAccountByEmailUseCase } from "../../src/use-case/searchUserAccountByEmail.js";

const teste = searchUserAccountByEmailUseCase('teste@teste.com')
const naoExiste = searchUserAccountByEmailUseCase('nao.existe@email.com')

console.log(teste)
console.log(naoExiste)