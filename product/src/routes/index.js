// concentrar todas as rotas da aplicação
import express from "express";
import products from "./productsRoute.js";
import categories from "./categoriesRoute.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({titulo: "Curso de node"});
    })

    app.use(
        categories,
        products
    )



}

export default routes;