export const usuarios = [{
    id: 0,
    nome: 'Matheus L',
    email: 'teste@teste.com',
    senha: '12456',
    createdDate: new Date().toLocaleDateString('pt-BR')
}]

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