const database = require ('../models/index.js');

class PaymentController{

    static async createPayment(req, res){
        const newPayment = req.body;
        try{
            const newPaymentCreated = await database.Payments.create(newPayment);
            return res.location(`/payments/${newPaymentCreated.id}`).status(201).json({Id: newPaymentCreated.id, Status: newPaymentCreated.status});
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
            return res.status(200).json({
                Id: requestedPayment.id, 
                Status: requestedPayment.status,
                ExpirationDate: requestedPayment.expirationDate,
                CardNumber: requestedPayment.cardNumber,
                CardHolder: requestedPayment.nameCard,
                MonetaryValue: requestedPayment.monetaryValue
            }); 
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

    static async cancelPayment(req, res){
        const { id } = req.params;
        const cancel = { "status":"CANCELADO" };
        try {
            await database.Payments.update(cancel, {
                where:{
                    id:Number(id)
                }
            });
            const cancelledPayment = await database.Payments.findOne({
                where:{
                    id:Number(id)
                }
            });
            return res.status(201).json(cancelledPayment);
        }  catch (error){
            return res.status(500).json(error.message);
        }
    }

    static async confirmPayment(req, res){
        const { id } = req.params;
        const confirm = { "status":"CONFIRMADO" };
        try {
            await database.Payments.update(confirm, {
                where:{
                    id:Number(id)
                }
            });
            const confirmedPayment = await database.Payments.findOne({
                where:{
                    id:Number(id)
                }
            });
            return res.status(201).json(confirmedPayment);
        }  catch (error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PaymentController; 