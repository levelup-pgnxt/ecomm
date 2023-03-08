import usuarios from './usuarios.js';

function createUserAdressUseCase(email, logradouro, numero, complemento, bairro, cep, cidade, uf) {
  const idUsuario = usuarios.findIndex((usuario) => usuario.email.includes(email));

  if (idUsuario >= 0) {
    usuarios[idUsuario].endereco = {
      logradouro,
      numero,
      complemento,
      bairro,
      cep,
      cidade,
      uf,
    };
    // eslint-disable-next-line no-console
    return console.log(usuarios[idUsuario]);
  }

  return 'Usuário não encontrado com o e-mail informado';
}

export default createUserAdressUseCase;
