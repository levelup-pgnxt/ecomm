// ## Documento usado para estudos, apagar depois de implementação

const listaUsuariosTeste = [];

function createUserUseCase(nome, emailCadastrado, senha) {
  const usuario = {
    id: listaUsuariosTeste.length,
    name: nome,
    email: emailCadastrado,
    password: senha,
    createdDate: new Date().toLocaleDateString(),
  };

  listaUsuariosTeste.push(usuario);

  return usuario;
}

export {
  createUserUseCase,
  listaUsuariosTeste,
};
