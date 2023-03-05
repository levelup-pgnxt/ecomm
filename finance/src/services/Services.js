const db = require('../models');

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async createRecord(data) {
    const result = await db[this.modelName].create(data);
    return result;
  }

  async getRecordByPk(id) {
    const result = await db[this.modelName].findByPk(id);
    return result;
  }
}

module.exports = Services;
