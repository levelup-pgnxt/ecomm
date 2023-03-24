// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const app = require('./src/app.js');

const port = process.env.PORT;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
