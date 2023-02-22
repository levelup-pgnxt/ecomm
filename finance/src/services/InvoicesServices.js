const Services = require('./Services')
const database = require('../models')

class InvoicesServices extends Services {
    constructor(){
        super('Invoices')
    }

}

module.exports = InvoicesServices