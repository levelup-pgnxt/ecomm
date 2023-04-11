import express from 'express';
import accounts from './accountRoutes.js';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({ titulo: 'API do ecommerce' });
  });

  app.use(
    express.json(),
    accounts,
  );
};

export default routes;

// "inicio" da api quando não é solicitado nada
