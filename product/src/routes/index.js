// concentrar todas as rotas da aplicação
import express from "express";
import categories from "./categoriesRoute.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"});
    })

    app.use(
        express.json(),
        categories
    )



}

export default routes;