import payments from './paymentsRoute';

export default app => {
  app.use(bodyParser.json());
  app.get('/', (req, res) => res.send('Olá'));
};