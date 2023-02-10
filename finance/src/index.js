require('express-async-errors');
const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = 3000;

routes(app);

app.listen(PORT, () => console.log(
    `Servidor está rodando em http://localhost:${PORT}`
));

module.exports = app;
