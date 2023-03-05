const MESSAGE_ERROR = {
  'Categoria já cadastrada!': 409,
  'Produto já cadastrado!': 409,
  'Valor mínimo maior que valor máximo. Operação não permitida!': 405,
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
