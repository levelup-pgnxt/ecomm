const { PaymentsServices } = require('../services')
const paymentsServices = new PaymentsServices()

class PaymentsController {

    static async pegaTodosOsPayments(req, res) {
        try {
            const todosOsPayments = await paymentsServices.pegaTodosOsRegistros()
            return res.status(200).json(todosOsPayments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmPayment(req, res) {
        const { id } = req.params

        const payment = await paymentsServices.pegaUmRegistro({ id })

        if (!payment) {
            return res.status(404).send('Pagamento não encontrado')
        } else {
            try {
                return res.status(200)
                    .send({
                        id: payment.id,
                        valor: payment.valor,
                        momeCartao: payment.nome,
                        expiracaoCartao: payment.expiracaoCartao,
                        status: payment.status,
                        createdAt: payment.createdAt,
                        updatedAt: payment.updatedAt
                    })
            } catch (error) {
                return res.status(500).json(error.message)
            }
        }
    }

    static async criaPayment(req, res) {
        const novoPayment = req.body

        if (novoPayment.status === undefined) {
            const novoPaymentCriado = await paymentsServices.criaRegistro(novoPayment, novoPayment.status = "CRIADO")
            return res.status(201)
                .location(`/payments/${novoPaymentCriado.id}`)
                .send({ id: novoPaymentCriado.id, status: novoPaymentCriado.status })
        } else if (novoPayment.status != "CRIADO") {
            console.log(novoPayment.status)
            return res.status(400).send({ message: "O status correto para criação é CRIADO" })
        } else {
            try {
                const novoPaymentCriado = await paymentsServices.criaRegistro(novoPayment)
                return res.status(201)
                    .location(`/payments/${novoPaymentCriado.id}`)
                    .send({ id: novoPaymentCriado.id, status: novoPaymentCriado.status })
            } catch (error) {
                return res.status(500).json(error.message)
            }
        }

    }
}

module.exports = PaymentsController