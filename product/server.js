/* eslint-disable no-console */
import dotenv from 'dotenv';
import app from './src/app.js';
import db from './src/config/dbConnect.js';

dotenv.config();

db.on('error', console.log.bind(console, 'Erro de conexão com o banco.'));
db.once('open', () => console.log('Conexão com o banco realizada com sucesso.'));

const port = process.env.PORT;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
