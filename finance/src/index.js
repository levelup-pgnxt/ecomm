require('express-async-errors');
const express = require('express');
const errorHandlerMiddleware = require('./auxiliaries/erroHandlerMiddleware');
const routes = require('./routes');

const app = express();

const PORT = 3002;

routes(app);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => console.log(
  `Servidor está rodando em http://localhost:${PORT}`,
));

module.exports = app;
