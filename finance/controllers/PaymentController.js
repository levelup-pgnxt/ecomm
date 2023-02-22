const database = require('../models')

function validationCvv(cvv) {
    let regex = /^\d..$/gm
    return regex.test(cvv)
}
function validationValue(value) {
    return value > 0 ? true : false
}

function validationDate (date) {
    let regex = /^\d{4}\-\d{2}$/gm
    return regex.test(date)
}

function validationNumbers (num) {
    let regex = /^\d{16}$/gm
    return regex.test(num)
}

class PaymentController {
    static async seeAllPayments (_req, res) {
        try {
            const allPayments = await database.Payments.findAll()
            return res.status(200).json(allPayments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static createPayment (req, res) {
        const pay = req.body
        if (!pay.status)
            pay.status = 'CREATED'
        if (validationNumbers(pay.number) == false) {
            res.status(400).send({message: `Number validation failed`})
        } else if (validationDate(pay.expiration) == false) {
            res.status(400).send({message: `Date validation failed`})
        } else if (validationValue(pay.value) == false) {
            res.status(400).send({message: `Value validation failed`})
        } else if (validationCvv(pay.cvv) == false) {
            res.status(400).send({message: `Cvv validation failed`})
        } else {
            try {
                database.Payments.create(pay)
                return res.status(201).json({message: `Created new payment ${pay.id, pay.status}`})
            } catch (error) {
                return res.status(500).json({message: `${error.message}`})
            }
        }
    }
}

module.exports = PaymentController