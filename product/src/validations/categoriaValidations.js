function isNomeCategoriaValido(nome) {
  const regex = /^[a-zA-Z\W][a-zA-Z0-9\s\W]{2,}$/;
  return regex.test(nome);
}

export default isNomeCategoriaValido;
