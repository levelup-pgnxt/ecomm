import usuarios from './usuarios.js';

function changeUserNameUseCase(email, novoNome) {
  const idUsuario = usuarios.findIndex((usuario) => usuario.email.includes(email));
  if (idUsuario >= 0) {
    usuarios[idUsuario].nome = novoNome;
    return true;
  }

  return false;
}

export default changeUserNameUseCase;
