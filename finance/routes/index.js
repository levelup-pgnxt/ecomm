const bodyParser = require('body-parser')
const payments = require('./paymentRouter')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(payments)
}
