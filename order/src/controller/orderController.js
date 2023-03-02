import Orders from '../models/Order.js';
import status from '../constantes.js';
import { fetchAccount, fetchPayment } from '../fetch.js';

class OrderController {
  static criarOrder = (req, res) => {
    const order = new Orders(req.body);
    order.status = status.STATUS_REALIZADO;

    order.save((err) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(201).send(order.toJSON());
    });
  };

  static confirmaOrder = async (req, res) => {
    const { id } = req.params;
    const { paymentId } = req.body;

    Orders.findByIdAndUpdate(id, { status: status.STATUS_PAGO }, async (err, order) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!order) {
        res.status(404).send({ message: 'Order não encontrada.' });
      } else {
        res.status(200).send({ message: 'Order confirmada.' });
      }
    });

    Orders.findById(id, async (err, order) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        const { name, cpf, address } = await fetchAccount(order.clienteId);
        const payload = {
          name, cpf, address, itens: order.itens, paymentId,
        };
        await fetchPayment(payload, paymentId);
      }
    });
  };
}

export default OrderController;
