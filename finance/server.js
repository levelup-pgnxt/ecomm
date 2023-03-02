const app = require('./src/app.js');

const port = process.env.port || 3003;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
