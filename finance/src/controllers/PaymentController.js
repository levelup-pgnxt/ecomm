const { PaymentsServices } = require('../services');
const paymentsServices = new PaymentsServices()
const paymentsValidates = require('../auxiliaries/paymentsValidates');
const STATUS = require('../auxiliaries/constant');

class PaymentController {
    static createPayment = async (req, res) => {
        const data = { ...paymentsValidates.paramsPayment(req.body), status: STATUS };
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

    static confirmPayment = async (req, res) => {
        const { id } = req.params;
        const { status } = await paymentsServices.getRecordByPk(Number(id));
        if (status !== STATUS) return res.status(400).json({ message: `Pagamento com status: "${status}", alteração não permitida!` })
        const situation = 'CONFIRMADO';
        await paymentsServices.updatePaymentStatus(id, situation);
        res.status(200).json({ message: 'Pagamento confirmado!'});
    };

    static cancelPayment = async (req, res) => {
        const { id } = req.params;
        const { status } = await paymentsServices.getRecordByPk(Number(id));
        if (status !== STATUS) return res.status(400).json({ message: `Pagamento com status: "${status}", alteração não permitida!` })
        const situation = 'CANCELADO';
        await paymentsServices.updatePaymentStatus(id, situation);
        res.status(200).json({ message: 'Pagamento cancelado!'});
    };
}

module.exports = PaymentController;
