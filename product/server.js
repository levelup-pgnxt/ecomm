/* eslint-disable no-console */
import app from './src/app.js';
import db from './src/config/dbConnect.js';

// conexão que estava no app foi colocada aqui no server,
// testar e ver o comportamento antes de mudar nos demais subprojetos
// testar tanto nos arquivos de teste quanto fazer os testes no postman
db.on('error', console.log.bind(console, 'Erro de conexão com o banco.'));
db.once('open', () => console.log('Conexão com o banco realizada com sucesso.'));

const port = process.env.port || 3001;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));
