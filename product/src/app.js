/* eslint-disable import/extensions */
import 'express-async-errors';
import express from 'express';
import passport from 'passport';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import errorHandlerMiddleware from './auxiliaries/erroHandlerMiddleware.js';
import authenticationStrategyBearer from './authentication/authentication.js';

db.on('error', console.log.bind(console, 'Erro de conexão!'));

db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso!');
});

const app = express();

app.use(express.json());
passport.use(authenticationStrategyBearer);

routes(app);

app.use(errorHandlerMiddleware);

export default app;
