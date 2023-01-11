import {createUserUseCase} from "../../src/use-case/createUserAccount.js"

const matheus = createUserUseCase('Matheus','email@email.com.br','EssaEUmaSenha')
console.log(matheus)
