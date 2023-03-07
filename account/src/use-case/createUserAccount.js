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

console.log('----------essa msg esta fora da funcao (createUsuario)-----------');

export {
  createUserUseCase,
  listaUsuariosTeste,
};
