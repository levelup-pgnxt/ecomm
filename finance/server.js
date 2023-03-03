require('express-async-errors');
const app = require('./src/app');

const PORT = 3002;

app.listen(PORT, () => console.log(
  `Servidor está rodando em http://localhost:${PORT}`,
));
