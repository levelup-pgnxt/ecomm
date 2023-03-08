const MESSAGE_ERROR = {
  'Categoria já cadastrada!': 409,
  'Produto já cadastrado!': 409,
  'Valor mínimo maior que valor máximo. Operação não permitida!': 405,
  'Senha inválida!': 400,
  'Estado da Federação inválido!': 400,
  'CPF inválido!': 400,
  'Senha deve possuir pelo menos 1 caracter minúsculo!': 400,
  'Senha deve possuir pelo menos 1 caracter maiúsculo!': 400,
  'Senha deve possuir pelo menos 1 número!': 400,
  'Senha deve possuir pelo menos 1 caracter especial "@$%#&*!?.+-"!': 400,
  'Usuário ou senha inválidos!': 401,
};

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    const keysMessageError = Object.keys(MESSAGE_ERROR);
    this.name = 'NotFoundError';
    if (keysMessageError.includes(message)) {
      this.code = MESSAGE_ERROR[message];
    } else {
      this.code = 404;
    }
  }
}

export default NotFoundError;
