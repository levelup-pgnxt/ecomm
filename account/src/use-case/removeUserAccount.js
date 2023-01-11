import { usuarios } from "./usuarios.js";

export function removeUserUseCase(email) {
    const indiceUsuario = usuarios.findIndex((usuario) => usuario.email.includes(email))
    if (indiceUsuario >= 0) {
        usuarios.splice(indiceUsuario, 1)
        return true
    } else {
        return false 
    }
}