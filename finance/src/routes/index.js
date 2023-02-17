const payments = require('./paymentsRoutes.js');

const routes = (app) => {
  app.use(
    payments
  )
}

module.exports = routes;