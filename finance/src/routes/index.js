const paymentsRoute = require('./paymentsRoutes');
const errorHandlerMiddleware = require('../auxiliaries/erroHandlerMiddleware');


const API = 'API Finance';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({ titulo: API });
  });

  app.use(
    errorHandlerMiddleware,
    paymentsRoute,
  );
};

module.exports = routes;
