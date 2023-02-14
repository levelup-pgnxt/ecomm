import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3306;

routes(app);

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));

export default app;