/* eslint-disable no-console */
import express from 'express';
import routes from './routes/index.js';
import passport from '../src/authentication/authStrategies.js';

const app = express();
app.use(express.json());
routes(app);

export default app;
