/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
