import express from 'express';
import routes from './routes/index.js';
// eslint-disable-next-line no-unused-vars
import passport from './authentication/authStrategies.js';

const app = express();
app.use(express.json());
routes(app);

export default app;
