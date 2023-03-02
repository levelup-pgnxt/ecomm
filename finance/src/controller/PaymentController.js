const { PaymentsServices } = require('../services');
const { InvoicesServices } = require('../services');

const paymentsServices = new PaymentsServices();
const invoicesServices = new InvoicesServices();
const { STATUS_CRIADO, STATUS_CANCELADO, STATUS_CONFIRMADO } = require('../constantes.js');
const { sequelize } = require('../models');

class PaymentsController {
  static async pegaTodosOsPayments(req, res) {
    try {
      const todosOsPayments = await paymentsServices.pegaTodosOsRegistros();
      return res.status(200).json(todosOsPayments);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmPayment(req, res) {
    const { id } = req.params;
    const payment = await paymentsServices.pegaUmRegistro({ id });

    try {
      if (!payment) {
        return res.status(404).send('Pagamento não encontrado');
      }
      return res.status(200)
        .send({
          id: payment.id,
          valor: payment.valor,
          nome: payment.nome,
          expiracaoCartao: payment.expiracaoCartao,
          status: payment.status,
          createdAt: payment.createdAt,
          updatedAt: payment.updatedAt,
        });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPayment(req, res) {
    const novoPayment = req.body;

    if (!novoPayment.status || novoPayment.status === STATUS_CRIADO) {
      const novoPaymentCriado = await paymentsServices
        .criaRegistro(novoPayment, novoPayment.status = STATUS_CRIADO);
      const links = [
        {
          rel: 'self',
          method: 'GET',
          href: `http://localhost:3003/admin/payments/${novoPaymentCriado.id}`,
        },
        {
          rel: 'CONFIRMAR',
          method: 'PATCH',
          href: `http://localhost:3003/admin/payments/${novoPaymentCriado.id}`,
        },
        {
          rel: 'CANCELAR',
          method: 'PATCH',
          href: `http://localhost:3003/admin/payments/${novoPaymentCriado.id}`,
        },
      ];
      return res.status(201)
        .location(`/payments/${novoPaymentCriado.id}`)
        .send({ id: novoPaymentCriado.id, status: novoPaymentCriado.status, links });
    }
    return res.status(400).send({ message: 'O status correto para criação é CRIADO' });
  }

  static async atualizaStatus(req, res) {
    const { id } = req.params;
    const { status, descricao } = req.body;
    const payment = await paymentsServices.pegaUmRegistro({ id });

    if (payment.status === STATUS_CRIADO) {
      if (status === STATUS_CONFIRMADO) {
        try {
          const result = await sequelize.transaction(async (t) => {
            const novaNotaFiscalCriada = await invoicesServices
              .criaRegistro({ descricao, paymentId: id }, { transaction: t });
            await paymentsServices
              .atualizaRegistro({ status: STATUS_CONFIRMADO }, Number(id), { transaction: t });
            return { id, status: STATUS_CONFIRMADO, notaFiscal: novaNotaFiscalCriada };
          });
          if (result.error) {
            return res.status(400).send({ message: result.error });
          }
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      } else if (status === STATUS_CANCELADO) {
        try {
          await paymentsServices.atualizaRegistro({ status: STATUS_CANCELADO }, Number(id));
          return res.status(200).json({ id, status: STATUS_CANCELADO });
        } catch (error) {
          return res.status(500).json(error.message);
        }
      } else {
        return res.status(400).send({ message: 'O status informado está incorreto' });
      }
    } else {
      return res.status(400).send({ message: `Você está tentando alterar um pagamento com o status ${payment.status}. Só é possível alterar pagamentos com o status CRIADO.` });
    }
  }
}

module.exports = PaymentsController;
