/* eslint-disable import/extensions */
import {} from 'dotenv/config';
import app from './src/app.js';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});
