const dataBase = require('../models')

class PaymentsController{
    static async pegaTodosOsDados(req, res){
        try{
            const pegaTodosOsDados = await dataBase.dbFinance.findAll()
            return res.status(200).json(pegaTodosOsDados)            
        }   catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async pegaUmDado(req, res){
        const { id } = req.params
        try{
            const pegaUmDado = await dataBase.dbFinance.findOne({ 
                where: { 
                    id: Number(id) 
                },
                attributes: [`id`, `valor`, `nome`, `numero`, `expiracao`, `status`, `createdAt`, `updatedAt`]
            })
            return res.status(200).json(pegaUmDado)  

        } catch (erro) {
            return res.status(404).json(error.message)

        }
    }

    static async criarDado(req, res){
        const novoPagamento = req.body
        try{
            const criarNovoDado = await dataBase.dbFinance.create(novoPagamento)
            return res.status(200).json(criarNovoDado)  

        } catch (erro) {
            return res.status(500).json(error.message)

        }
    }

  static async setarStatusAdmin(req, res){
        const statusPagamento = req.body
        const { id } = req.params
        try{
            await dataBase.dbFinance.update(statusPagamento, { where: { id: Number(id)}} )
            const pagamentoTotal = await dataBase.dbFinance.findOne({ where: { id: Number(id) }})
            return res.status(200).json(pagamentoTotal)  

        } catch (erro) {
            return res.status(500).json(error.message)

        }
    }

    static async alterarStatus(req, res){
        const statusPagamento = req.body
        const { id } = req.params
        try{           
            
            const {status} = await dataBase.dbFinance.findOne({ 
                where: { 
                    id: Number(id) 
                }
            })

            
            if (status === 'CONFIRMADO'|| status === 'CANCELADO') {
                return res.status(405).json({ message: 'o status não pode ser alterado!' });
            }else{
                await dataBase.dbFinance.update(statusPagamento, { where: { id: Number(id)}} )
                const pagamentoTotal = await dataBase.dbFinance.findOne({ 
                    where: { 
                        id: Number(id) 
                    },
                    attributes: [`id`, `valor`, `status`, `createdAt`, `updatedAt`]
                })

                return res.status(200).json(pagamentoTotal) 
            }

        } catch (erro) {
            return res.status(500).json({message: `${erro.message} - id do pagamento não encontrado`})

        }
    }

    
}


module.exports = PaymentsController