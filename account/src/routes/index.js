import express from 'express';
import accounts from './accountRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'API de Accounts'})
    })

    app.use(
        express.json(),
        accounts
    )
}

export default routes;