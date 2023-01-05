import { usuarios } from "./usuarios.js"

export function searchUserAccountByEmailUseCase(email){
    const usuarioProcurado = usuarios.find((usuario) => usuario.email.includes(email))
    
    return usuarioProcurado ? `O nome do usuário procurado é: ${usuarioProcurado.nome}` : "Usuário não encontrado. Favor verificar o e-mail informado."
}
