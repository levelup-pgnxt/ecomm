import { usuarios } from "./usuarios.js"

export function createUserUseCase (nome, email, senha){
    const userId = usuarios.length + 1;

    const userAccounts = {
        id: userId,
        nome: nome,
        email: email,
        senha: senha,
        createdDate: new Date().toISOString().substring(0,10)
    }
    
    usuarios.push(userAccounts)
    return usuarios
}