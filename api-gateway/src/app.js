import express from 'express';
import accounts from './routes/accountsRoutes.js';
import passport from './authentication/authStrategies.js';

const app = express();

app.use('/', accounts);

export default app;
