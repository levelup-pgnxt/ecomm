import express from 'express';
import orders from './ordersRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'API de Pedidos' });
  });

  app.use(
    express.json(),
    orders,
  );
};

export default routes;
