const dataBase = require('../models')

class DadosController{
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
            return res.status(500).json(error.message)

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

    static async setarStatus(req, res){
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

}


module.exports = DadosController