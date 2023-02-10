const { PaymentsServices } = require('../services');
const paymentsServices = new PaymentsServices()
const validates = require('../auxiliaries/utils')

class PaymentController {
    static createPayment = async (req, res) => {
        const data = { ...validates.paramsPayment(req.body), status: 'CRIADO' };
        const newPayment = await paymentsServices.createRecord(data);
        const { id, status } = newPayment;
        return res.status(200).json({ id, status });
    };
}

module.exports = PaymentController;
