import { usuarios } from "./usuarios.js"

export function changeUserNameUseCase(email, novoNome){
    const idUsuario = usuarios.findIndex((usuario) => usuario.email.includes(email))
    if(idUsuario >= 0) {
        usuarios[idUsuario].nome = novoNome
        return true
    }
    else {
        return false
    }
}