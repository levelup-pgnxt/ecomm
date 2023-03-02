const express = require('express');
const paymentsRoute = require('./paymentsRoutes');

const API = 'API Finance';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({ titulo: API });
  });

  app.use(
    express.json(),
    paymentsRoute,
  );
};

module.exports = routes;
