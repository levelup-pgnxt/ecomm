const db = require('../models/index.js')

const PaymentsController = {
  create: async (req, res) => {
    const newPayment = { ...req.body, status: 'CRIADO' }
    try {
      const createdPayment = await db.Payments.create(newPayment);
      const { id, status } = createdPayment

      return res
        .status(201)
        .header({ Location: `/payments/${createdPayment.id}` })
        .json({ id, status });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const payment = await db.Payments.findOne({
        where: { id: Number(id) },
        attributes: { exclude: ['cvv'] }
      });

      return res.status(200).json(payment)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};

module.exports = PaymentsController;
