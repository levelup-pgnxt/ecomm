import { usuarios } from "./usuarios.js";

export function removeUserUseCase(email) {
    const idUsuario = usuarios.findIndex((usuario) => usuario.email.includes(email))
    if (idUsuario >= 0) {
        usuarios.splice(idUsuario, 1)
        return true
    } else {
        return false 
    }
}