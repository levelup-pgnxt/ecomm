// ## Documento usado para estudos, apagar depois de implementação

import { listaUsuariosTeste } from '../teste/config/creatUserAccount.teste.js';
// importar a lista de usuários isso tá aqui pq se n fica retornando zero

function searchUserAccountByEmailUseCase(emailPesquisado) {
  return listaUsuariosTeste.find((item) => item.email === emailPesquisado);
}

// função que pesquisa e retorna o objeto encontrado
export {
  searchUserAccountByEmailUseCase,
};
// exporta a função de procurar o
