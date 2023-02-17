const db = require('../models/index.js')

const PaymentsController = {
  create: async (req, res) => {
    const newPayment = { ...req.body, status: 'CRIADO' }
    try {
      const createdPayment = await db.Payments.create(newPayment);
      const { id, status } = createdPayment

      return res.status(201).json({ id, status });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};

module.exports = PaymentsController;
