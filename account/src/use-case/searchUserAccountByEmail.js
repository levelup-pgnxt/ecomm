import { usuarios } from "./usuarios.js"

export function searchUserAccountByEmailUseCase(email){
    const usuarioProcurado = usuarios.find((usuario) => usuario.email.includes(email))
    
    return usuarioProcurado ? usuarioProcurado : usuarios.find((usuario) => usuario.email.includes(email))
}
