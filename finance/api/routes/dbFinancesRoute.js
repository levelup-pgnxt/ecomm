const { Router } = require('express')
const PaymentsController = require('../controllers/PaymentsController.js')

const router = Router()

router.get('/payments', PaymentsController.pegaTodosOsDados)
router.get('/payments/:id', PaymentsController.pegaUmDado)
router.post('/payments', PaymentsController.criarDado)
router.patch('/payments/:id', PaymentsController.setarStatusAdmin)//USADO PARA REESCREVER O STATUS DE QUALQUER PAGAMENTO EM QUALQUER ESTADO
router.put('/payments/:id', PaymentsController.alterarStatus)

module.exports = router