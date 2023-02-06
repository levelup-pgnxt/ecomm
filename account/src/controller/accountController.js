import accounts from "../models/Account.js";

class AccountController {

    static listarAccounts = (req, res) => {
        accounts.find((err, accounts) => {
            res.status(200).json(accounts)
        })
    }

    static criarAccount = (req, res) => {
        const account = new accounts(req.body);

        account.save((err) => {
            if(err){
                res.status(500).send({message: err.message});
            } else {
                res.status(201).send(account.toJSON())
            }
        })
    }

    static listarAccountPorId = (req, res) => {
        const id = req.params.id

        accounts.findById(id, (err, account) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if (!account) {
                res.status(404).send({message: 'Account não encontrada.'})
            } else {
                res.status(200).send(account)
            }
        })
    }

    static atualizarAccount = (req, res) => {
        const id = req.params.id

        accounts.findByIdAndUpdate(id, req.body, (err, account) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if(!account) {
                res.status(404).send({message: 'Account não encontrada.'})
            } else {
                res.status(200).send({message: 'Account atualizada com sucesso.'})
            }
        })
    }

    static excluirAccount = (req, res) => {
        const id = req.params.id

        accounts.findByIdAndDelete(id, (err, account) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if (!account) {
                res.status(404).send({message: 'Account não encontrada.'})
            } else {
                res.status(200).send({message: 'Account excluída com sucesso.'})
            }
        })
    }
}

export default AccountController;