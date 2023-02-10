const { Router } = require('express')
const DadosController = require('../controllers/DadosController.js')

const router = Router()

router.get('/dbFinances', DadosController.pegaTodosOsDados)
router.get('/dbFinances/:id', DadosController.pegaUmDado)
router.post('/dbFinances', DadosController.criarDado)
router.put('/dbFinances/:id', DadosController.setarStatus)


module.exports = router