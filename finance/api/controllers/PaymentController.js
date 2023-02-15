const database = require ('../models/index.js');

class PaymentController{

    static async createPayment(req, res){
        const newPayment = req.body;
        try{
            const newPaymentCreated = await database.Payments.create(newPayment);
            return res.status(201).json({Id: newPaymentCreated.id, Status: newPaymentCreated.status});
        }catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async getPaymentById(req, res){
        const { id } = req.params;
        try{
            const requestedPayment = await database.Payments.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(requestedPayment.id, requestedPayment.status); //terminar de inserir o que falta do retorno da requisição
        } catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async getPayments(req, res){
        try{
            const allPayments = await database.Payments.findAll();
            return res.status(200).json(allPayments);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PaymentController; 