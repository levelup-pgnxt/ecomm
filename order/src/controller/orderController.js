import orders from '../models/Order.js';
import { STATUS_REALIZADO, STATUS_PAGO } from '../constantes.js'

class OrderController {

    static criarOrder = (req, res) => {
        const order = new orders(req.body);
        order.status = STATUS_REALIZADO

        order.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(201).send(order.toJSON())
            }
        })
    }

    static confirmaOrder = async (req, res) => {
        const id = req.params.id
        // const order = await orders.findById(id)
        
        orders.findByIdAndUpdate(id, {status: STATUS_PAGO}, (err, order) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if(!order) {
                res.status(404).send({message: 'Order não encontrada.'})
            } else {
                res.status(200).send({message: 'Order confirmada.'})
            }
        })

        // const cliente = await fetch(`http://localhost:3002/api/admin/accounts`)
    }
}

export default OrderController;
