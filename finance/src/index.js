require('express-async-errors');
const errorHandlerMiddleware = require('./auxiliaries/erroHandlerMiddleware');
const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = 3000;

routes(app);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => console.log(
    `Servidor está rodando em http://localhost:${PORT}`
));

module.exports = app;
