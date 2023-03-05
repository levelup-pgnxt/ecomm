const { PaymentsServices } = require('../services');

const paymentsServices = new PaymentsServices();
const paymentsValidates = require('../auxiliaries/paymentsValidates');
const STATUS = require('../auxiliaries/constant');

class PaymentController {
  static createPayment = async (req, res) => {
    const data = { ...paymentsValidates.paramsPayment(req.body), status: STATUS[0] };
    const newPayment = await paymentsServices.createRecord(data);
    const { id, status } = newPayment;
    res.status(200).json({ id, status });
  };

  static getPaymentById = async (req, res) => {
    const { id } = req.params;
    const result = await paymentsServices.getRecordByPk(Number(id));
    if (!result) {
      res.status(404).json({ message: 'Payment not found!' });
    } else {
      const { cvv, ...payment } = result.dataValues;
      res.status(200).json(payment);
    }
  };

  static confirmPayment = async (req, res) => {
    const { id } = req.params;
    const { status } = await paymentsServices.getRecordByPk(Number(id));
    console.log(status);
    if (status !== STATUS[0] && status !== STATUS[1]) {
      res.status(400).json({ message: `Pagamento com status: "${status}", alteração não permitida!` });
    } else if (status === STATUS[1]) {
      res.status(400).json({ message: 'Operação já realizada!' });
    } else {
      const situation = STATUS[1];
      await paymentsServices.updatePaymentStatus(id, situation);
      res.status(200).json({ message: 'Pagamento confirmado!' });
    }
  };

  static cancelPayment = async (req, res) => {
    const { id } = req.params;
    const { status } = await paymentsServices.getRecordByPk(Number(id));
    console.log(status);
    if (status !== STATUS[0] && status !== STATUS[2]) {
      res.status(400).json({ message: `Pagamento com status: "${status}", alteração não permitida!` });
    } else if (status === STATUS[2]) {
      res.status(400).json({ message: 'Operação já realizada!' });
    } else {
      const situation = STATUS[2];
      await paymentsServices.updatePaymentStatus(id, situation);
      res.status(200).json({ message: 'Pagamento cancelado!' });
    }
  };
}

module.exports = PaymentController;
