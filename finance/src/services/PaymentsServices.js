const Services = require('./Services');
const db = require('../models');

class PaymentsServices extends Services {
  constructor() {
    super('Payment');
  }

  async updatePaymentStatus(id, situation) {
    return db[this.modelName].update(
      { status: situation },
      { where: { id } },
    );
  }
}

module.exports = PaymentsServices;
