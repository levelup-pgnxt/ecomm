// import express from 'express';

const API = 'API Finance';

const routes = (app) => {
    app.route('/').get((_req, res) => {
        res.status(200).send({ titulo: API });
    });

    // app.use(
    //     express.json(),
    //     categoriesRoutes,
    //     productsRoutes,
    // );
};

module.exports = routes;

