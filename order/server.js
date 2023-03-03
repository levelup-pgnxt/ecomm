/* eslint-disable no-console */
import app from './src/app.js';
// import db from './src/config/dbConnect.js';

// db.on('error', console.log.bind(console, 'Erro de conexão com o banco.'));
// db.once('open', () => console.log('Conexão com o banco realizada com sucesso.'));

// utilizando a conexão do banco pelo server (e não pelo app) e abrindo uma conexão com um banco de
// testes no arquivo de teste o método patch não funcionou por conta do fetchAPI

const port = process.env.port || 3004;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
