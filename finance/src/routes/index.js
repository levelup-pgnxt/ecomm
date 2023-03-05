const paymentsRoute = require('./paymentsRoutes');


const API = 'API Finance';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({ titulo: API });
  });

  app.use(
    paymentsRoute,
  );
};

module.exports = routes;
