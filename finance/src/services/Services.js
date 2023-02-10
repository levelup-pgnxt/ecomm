const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].findAll()
      }

    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }
}

module.exports = Services;