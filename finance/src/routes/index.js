const express = require('express');
const payments = require('./PaymentsRoutes.js');

const routes = (app) => {
  app.use(
    express.json(),
    payments,
  );
};

module.exports = routes;
