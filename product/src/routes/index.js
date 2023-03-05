/* eslint-disable import/extensions */
import express from 'express';
import categoriesRoutes from './categoriesRoutes.js';
import productsRoutes from './productsRoutes.js';

// const API = 'API Products e Categories';

const routes = (app) => {
  // app.route('/').get((_req, res) => {
  //     res.status(200).send({ titulo: API });
  // });

  app.use(
    express.json(),
    categoriesRoutes,
    productsRoutes,
  );
};

export default routes;
