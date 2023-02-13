const { PaymentsServices } = require('../services');
const paymentsServices = new PaymentsServices()
const validates = require('../auxiliaries/utils');

class PaymentController {
    static createPayment = async (req, res) => {
        const data = { ...validates.paramsPayment(req.body), status: 'CRIADO' };
        const newPayment = await paymentsServices.createRecord(data);
        const { id, status } = newPayment;
        res.status(200).json({ id, status });
    };

    static getPaymentById = async (req, res) => {
        const { id } = req.params;
        const result = await paymentsServices.getRecordByPk(Number(id));
        if (!result) return res.status(404).json({ message: 'Payment not found!'});
        const { cvv, ...payment } = result.dataValues;
        res.status(200).json(payment);
    };

    static paymentConfirmed = async (req, res) => {
        const { id } = req.params;
        const { status } = await paymentsServices.getRecordByPk(Number(id));
        if (status !== 'CRIADO') return res.status(400).json({ message: `Pagamento com status: "${status}", alteração não permitida!` })
        const situation = 'CONFIRMADO';
        await paymentsServices.paymentConfirmedCanceled(id, situation);
        res.status(200).json({ message: 'Pagamento confirmado!'});
    };

    static paymentCanceled = async (req, res) => {
        const { id } = req.params;
        const { status } = await paymentsServices.getRecordByPk(Number(id));
        if (status !== 'CRIADO') return res.status(400).json({ message: `Pagamento com status: "${status}", alteração não permitida!` })
        const situation = 'CANCELADO';
        await paymentsServices.paymentConfirmedCanceled(id, situation);
        res.status(200).json({ message: 'Pagamento cancelado!'});
    };
}

module.exports = PaymentController;
