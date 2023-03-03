import express from 'express';
import categories from './categoriesRoutes';
import products from './productsRoutes';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({ titulo: 'API do ecommerce' });
  });

  app.use(
    express.json(),
    categories,
    products,
  );
};

export default routes;

// "inicio" da api quando não é solicitado nada
