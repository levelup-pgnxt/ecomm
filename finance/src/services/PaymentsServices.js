const Services = require('./Services');
// const db = require('../models');

class PaymentsServices extends Services {
    constructor() {
        super('Payment')
    }
};

module.exports = PaymentsServices;
