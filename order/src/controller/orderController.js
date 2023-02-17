import orders from '../models/Order.js';

class OrderController {

    static criarOrder = (req, res) => {
        const order = new orders(req.body);
        order.status = 'REALIZADO'

        order.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(201).send(order.toJSON())
            }
        })
    }

    static confirmaOrder = (req, res) => {
        const id = req.params.id
        
        orders.findByIdAndUpdate(id, {status: "PAGO"}, (err, order) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if(!order) {
                res.status(404).send({message: 'Order não encontrada.'})
            } else {
                res.status(200).send({message: 'Order confirmada.'})
            }
        })
    }
}

export default OrderController;