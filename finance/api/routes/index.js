const bodyParser = require('body-parser')
const dbFinances = require('./dbFinancesRoute')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(dbFinances)

}