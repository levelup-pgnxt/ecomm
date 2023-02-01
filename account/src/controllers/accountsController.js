import accounts from '../models/Account.js';

class AccountController {
    
    static findAccounts = (_req, res) => {
        accounts.find((_err, account) => {
            res.status(200).json(account);
        })
    }

    static findAccountById = (req, res) => {
        const { id } = req.params;
        accounts.findById(id, (err, Account) => {
            if(err) {
                res.status(500).send({message: err.message})
              } else {
                res.status(201).json(Account)
              }
        })
    }

    static createAccount = (req, res) => {
        const account = new accounts(req.body);
        account.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
              } else {
                res.status(201).json(account)
              }
        })
    }

    static updateAccount = (req, res) => {
        const { id } = req.params;
    
        accounts.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Account successfully updated'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }

      static deleteAccount = (req, res) => {
        const { id } = req.params;
    
        accounts.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(204).send({message: 'Account successfully deleted'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
}

export default AccountController;