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

    static confirmaOrder = async (req, res) => {
        const id = req.params.id
        const order = await orders.findById(id)
        
        orders.findByIdAndUpdate(id, {status: "PAGO"}, (err, order) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if(!order) {
                res.status(404).send({message: 'Order não encontrada.'})
            } else {
                res.status(200).send({message: 'Order confirmada.'})
            }
        })

        const cliente = await fetch(`http://localhost:3002/api/admin/accounts`)
    }
}

export default OrderController;


// static confirmaOrder = async (req, res) => {
//     const id = req.params.id;
  
//     try {
//       const order = await orders.findById(id);
  
//       // Realiza a requisição para obter informações do cliente
//       const clienteResponse = await fetch(`https://api.receitafederal.com.br/cliente/${order.cpf}`);
//       const clienteData = await clienteResponse.json();
  
//       // Realiza a requisição para obter informações dos produtos
//       const produtosResponse = await fetch(`https://suaapi.com/produtos?id=${order.produtos}`);
//       const produtosData = await produtosResponse.json();
  
//       // Realiza a requisição para confirmar o pagamento e gerar a nota fiscal
//       const pagamentoResponse = await fetch('https://suaapi.com/pagamento', {
//         method: 'POST',
//         body: JSON.stringify({ produtos: produtosData, cliente: clienteData }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const pagamentoData = await pagamentoResponse.json();
  
//       // Atualiza o status do pedido para "PAGO"
//       await orders.findByIdAndUpdate(id, { status: 'PAGO' });
  
//       res.status(200).send({ message: 'Order confirmada' });
//     } catch (err) {
//       res.status(500).send({ message: err.message });
//     }
//   }




