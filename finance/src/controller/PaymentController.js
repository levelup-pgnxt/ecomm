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
                        nome: payment.nome,
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
            const links = [
                {
                  "rel": "self",
                  "method": "GET",
                  "href": `http://localhost:3003/admin/payments/${novoPaymentCriado.id}`
                },
                {
                  "rel": "CONFIRMAR",
                  "method": "PATCH",
                  "href": `http://localhost:3003/admin/payments/${novoPaymentCriado.id}/confirmado`
                },
                {
                  "rel": "CANCELAR",
                  "method": "PATCH",
                  "href": `http://localhost:3003/admin/payments/${novoPaymentCriado.id}/cancelado`
                }
              ]
            return res.status(201)
                .location(`/payments/${novoPaymentCriado.id}`)
                .send({ id: novoPaymentCriado.id, status: novoPaymentCriado.status, links: links })
        } else if (novoPayment.status != "CRIADO") {
            return res.status(400).send({ message: "O status correto para criação é CRIADO" })
        } else {
            try {
                const novoPaymentCriado = await paymentsServices.criaRegistro(novoPayment)
                const links = [
                    {
                      "rel": "self",
                      "method": "GET",
                      "href": `http://localhost:3003/admin/payments/${novoPaymentCriado.id}`
                    },
                    {
                      "rel": "CONFIRMAR",
                      "method": "PATCH",
                      "href": `http://localhost:3003/admin/payments/${novoPaymentCriado.id}/confirmado`
                    },
                    {
                      "rel": "CANCELAR",
                      "method": "PATCH",
                      "href": `http://localhost:3003/admin/payments/${novoPaymentCriado.id}/cancelado`
                    }
                  ]
                return res.status(201)
                    .location(`/payments/${novoPaymentCriado.id}`)
                    .send({ id: novoPaymentCriado.id, status: novoPaymentCriado.status, links: links })
            } catch (error) {
                return res.status(500).json(error.message)
            }
        }

    }

    static async confirmaPayment(req, res) {
        const { id } = req.params;
        const novoStatus = req.body;
        const payment = await paymentsServices.pegaUmRegistro({ id })

        if (payment.status == "CRIADO") {
            if (novoStatus.status === undefined) {
                try {
                    await paymentsServices.atualizaRegistro({ status: "CONFIRMADO" }, Number(id))
                    return res.status(200).json({ id: id, status: "CONFIRMADO" })
                } catch (error) {
                    return res.status(500).json(error.message)
                }
            } else if (novoStatus.status == "CONFIRMADO") {
                try {
                    await paymentsServices.atualizaRegistro(novoStatus.status, Number(id))
                    return res.status(200).json({ id: id, status: novoStatus.status })
                } catch (error) {
                    return res.status(500).json(error.message)
                }
            } else {
                return res.status(400).send({ message: "O status informado está incorreto" })
            }
        } else {
            return res.status(400).send({ message: `Você está tentando alterar um pagamento com o status ${payment.status}. Só é possível alterar pagamentos com o status CRIADO.` })
        }

    }

    static async cancelaPayment(req, res) {
        const { id } = req.params;
        const novoStatus = req.body; const payment = await paymentsServices.pegaUmRegistro({ id })

        if (payment.status == "CRIADO") {
            if (novoStatus.status === undefined) {
                try {
                    await paymentsServices.atualizaRegistro({ status: "CANCELADO" }, Number(id))
                    return res.status(200).json({ id: id, status: "CANCELADO" })
                } catch (error) {
                    return res.status(500).json(error.message)
                }
            } else if (novoStatus.status == "CANCELADO") {
                try {
                    await paymentsServices.atualizaRegistro(novoStatus.status, Number(id))
                    return res.status(200).json({ id: id, status: novoStatus.status })
                } catch (error) {
                    return res.status(500).json(error.message)
                }
            } else {
                return res.status(400).send({ message: "O status informado está incorreto" })
            }
        } else {
            return res.status(400).send({ message: `Você está tentando alterar um pagamento com o status ${payment.status}. Só é possível alterar pagamentos com o status CRIADO.` })
        }
    }
}

module.exports = PaymentsController