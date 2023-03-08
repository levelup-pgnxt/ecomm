const database = require('../models');

class Services {
  constructor(nomeDoModelo) {
    this.nomeDoModelo = nomeDoModelo;
  }

  async pegaTodosOsRegistros() {
    return database[this.nomeDoModelo].findAll();
  }

  async pegaUmRegistro(where = {}) {
    return database[this.nomeDoModelo].findOne({ where: { ...where } });
  }

  async criaRegistro(dados) {
    return database[this.nomeDoModelo]
      .create(dados);
  }

  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return database[this.nomeDoModelo]
      .update(dadosAtualizados, { where: { id } }, transacao);
  }
}

module.exports = Services;
