
import { listaUsuariosTeste } from "../teste/creatUserAccount.teste.js";
//importar a lista de usuários isso tá aqui pq se n fica retornando zero

function searchUserAccountByEmailUseCase(emailPesquisado){
    return listaUsuariosTeste.find((item)=> item["email"]===emailPesquisado);
   
}

//função que pesquisa e retorna o objeto encontrado 
console.log("----------essa msg esta fora da funcao (procurarAccount)-----------")
//error catch

export {
    searchUserAccountByEmailUseCase,
};
//exporta a função de procurar o email
