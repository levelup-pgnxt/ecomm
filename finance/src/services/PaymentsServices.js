const Services = require('./Services');
// const db = require('../models');

class PaymentsServices extends Services {
    constructor() {
        super('Payments')
    }
};

module.exports = PaymentsServices;
