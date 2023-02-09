import AccountController from '../controller/accountController.js';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import documentacao from '../../swagger/account.json' assert {type: "json"};

const router = express.Router();

router
    .get('/api/admin/accounts', AccountController.listarAccounts)
    .get('/api/admin/accounts/:id', AccountController.listarAccountPorId)
    .post('/api/admin/accounts', AccountController.criarAccount)
    .put('/api/admin/accounts/:id', AccountController.atualizarAccount)
    .delete('/api/admin/accounts/:id', AccountController.excluirAccount)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(documentacao))

export default router;