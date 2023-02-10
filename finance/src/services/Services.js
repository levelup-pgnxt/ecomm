const db = require('../models');

class Services {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async createRecord(data) {
        return db[this.modelName].create(data);
    }
};

module.exports = Services;
