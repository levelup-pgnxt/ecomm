import express from 'express';
import accounts from './routes/accountsRoutes.js';
import payments from './routes/financesRoutes.js';
import passport from './authentication/authStrategies.js';

const app = express();

app.use('/', accounts);
app.use('/', payments);

export default app;
