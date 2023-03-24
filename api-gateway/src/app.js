import express from 'express';
import accounts from './routes/accountsRoutes.js';
import payments from './routes/financesRoutes.js';
import products from './routes/productsRoutes.js';
import categories from './routes/categoriesRoutes.js';
import orders from './routes/ordersRoutes.js';
import passport from './authentication/authStrategies.js';

const app = express();

app.use('/', accounts);
app.use('/', payments);
app.use('/', products);
app.use('/', categories);
app.use('/', orders);

export default app;
