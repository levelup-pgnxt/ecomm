import { usuarios } from "./usuarios.js"

export function searchUserAccountByStateUseCase(uf){
    const usuarioProcurado = usuarios.filter((usuario) => usuario.endereco.uf === uf)
    
    return usuarioProcurado.length >= 1 ? usuarioProcurado : "Não existem registros para a UF procurada. Verifique se todos os caracteres estão em letra maiúscula."
}