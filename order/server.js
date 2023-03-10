/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

const port = process.env.port || 3004;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
