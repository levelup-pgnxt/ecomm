import { usuarios } from "./usuarios.js";

export function createUserAdressUseCase(email, logradouro, numero, complemento, bairro, cep, cidade, uf) {
    const idUsuario = usuarios.findIndex((usuario) => usuario.email.includes(email))

    if (idUsuario >= 0) {
        usuarios[idUsuario].endereco = {
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            uf: uf
        }
        return console.log(usuarios[idUsuario])
    }
    else {
        return "Usuário não encontrado com o e-mail informado"
    }
}