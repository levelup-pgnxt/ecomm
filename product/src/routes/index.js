// import express from 'express';
// import booksRoutes from './BooksRoutes.js';
// import authorsRoutes from './authorsRoutes.js';
// import publishersRoutes from './publishersRoutes.js';

const API = 'API Products e Categories';

const routes = (app) => {
    app.route('/').get((_req, res) => {
        res.status(200).send({ titulo: API });
    });

    // app.use(
    //     express.json(),
    //     booksRoutes,
    //     authorsRoutes,
    //     publishersRoutes
    // );
};

export default routes;