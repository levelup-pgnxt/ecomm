const Services = require('./Services')
const database = require('../models')

class PaymentsServices extends Services {
    constructor(){
        super('Payments')
    }

}

module.exports = PaymentsServices