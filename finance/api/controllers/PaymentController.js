import database from '../models';

class PaymentController{
    static async getAllPayments(req, res){
        try{
            const allPayments = await database.Payments.findAll();
            return res.status(200).json(allPayments);
        } catch (error){
            return res.status(500).json(error.message);
        }
    }
}

export default PaymentController; 