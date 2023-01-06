import { searchUserAccountByEmailUseCase } from "../use-case/searchUserAccountByEmail.js";
import { listaUsuariosTeste } from "./creatUserAccount.teste.js";
//importar a função de procurar um usuário
const emailPesquisado = "testeProcura@gmail.com"
//imputar o email para pesquisar
const emailEncontrado = searchUserAccountByEmailUseCase(emailPesquisado)

console.log(listaUsuariosTeste)
console.log(emailEncontrado)
//procurar e retornar APENAS o objeto que tem o email
var pos = listaUsuariosTeste.indexOf(emailEncontrado);
console.log(pos)

const newlistaUsuariosTeste = listaUsuariosTeste.splice(pos+1, 0);
console.log(newlistaUsuariosTeste)