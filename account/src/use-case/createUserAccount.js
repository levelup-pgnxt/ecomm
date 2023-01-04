const usuarios = []

export function createUserUseCase (nome, email, senha){

    usuarios.push({
        id: usuarios.length + 1,
        nome: nome,
        email: email,
        senha: senha,
        createdDate: new Date().toLocaleDateString('pt-BR')
    })

    return usuarios
}