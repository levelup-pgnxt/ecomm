const express = require('express');
const routes = require('./routes/index.js');

const app = express();

app.use(express.json());
routes(app);

module.exports = app;

// como tava antes
// const port = 3001

// routes(app)

// app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))
// module.exports = app
