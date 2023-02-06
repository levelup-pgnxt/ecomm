import express from 'express';
import usersRoutes from './usersRoutes.js';

const API = 'API Users Ecomm';

const routes = (app) => {
    app.route('/').get((_req, res) => {
        res.status(200).send({ titulo: API });
    });

    app.use(
        express.json(),
        usersRoutes,
    );
};

export default routes;
