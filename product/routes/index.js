import express from 'express';
import categorias from './categoriasRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'API de Produtos'})
    })

    app.use(
        express.json(),
        categorias
    )
}

export default routes