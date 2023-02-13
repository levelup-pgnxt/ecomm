import express from 'express';
import routes from './routes';

const app = express();
const port = 3001;

routes(app);

app.listen(port, () => console.log(`Servidor está escutando na porta ${port}`));

export default app;