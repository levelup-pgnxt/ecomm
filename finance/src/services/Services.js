const db = require('../models');

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async createRecord(data) {
        return await db[this.modelName].create(data);
    }

    async getRecordByPk(id) {
        return await db[this.modelName].findByPk(id);
    }
};

module.exports = Services;
