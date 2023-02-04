import express from 'express';
import categoriesRoutes from './categoriesRoutes.js';
import productsRoutes from './productsRoutes.js';
// import publishersRoutes from './publishersRoutes.js';

const API = 'API Products e Categories';

const routes = (app) => {
    app.route('/').get((_req, res) => {
        res.status(200).send({ titulo: API });
    });

    app.use(
        express.json(),
        categoriesRoutes,
        productsRoutes,
    //     authorsRoutes,
    //     publishersRoutes
    );
};

export default routes;
