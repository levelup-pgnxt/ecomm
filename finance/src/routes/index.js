const express = require('express')

const routes = (app) => {
    app.use(
        express.json()
    )
}

module.exports = routes;