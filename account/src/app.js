import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import './security/estrategiaAutenticacao.js';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config();

db.once('open', () => {
  console.log('Db successfully connected!');
});

const app = express();
app.use(express.json());
app.use(passport.initialize());
routes(app);

export default app;
