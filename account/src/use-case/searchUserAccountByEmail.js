import usuarios from './usuarios.js';

function searchUserAccountByEmailUseCase(email) {
  const usuarioProcurado = usuarios.find((usuario) => usuario.email.includes(email));

  return usuarioProcurado || usuarios.find((usuario) => usuario.email.includes(email));
}

export default searchUserAccountByEmailUseCase;
