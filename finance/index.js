const express = require('express')
const routes = require('./routes/index.js')

const app = express()
const port = 4001

routes(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app
