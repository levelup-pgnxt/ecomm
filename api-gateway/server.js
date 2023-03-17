/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './src/app.js';
import blocklist from './redis/blocklist.js';

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => console.log(`Servidor escutando na porta ${port}`));
