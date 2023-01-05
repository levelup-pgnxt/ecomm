import { usuarios } from "./usuarios.js"

export function createUserUseCase (nome, email, senha){

    const userAccounts = {
        id: usuarios.length + 1,
        nome: nome,
        email: email,
        senha: senha,
        createdDate: new Date().toLocaleDateString('pt-BR')
    }
    
    usuarios.push(userAccounts)
    return usuarios
}