import Accounts from '../models/Account.js';

class AccountController {
  static listarAccounts = (req, res) => {
    Accounts.find((err, accounts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(accounts);
    });
  };

  static criarAccount = (req, res) => {
    const account = new Accounts(req.body);

    account.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).send(account.toJSON());
      }
    });
  };

  static listarAccountPorId = (req, res) => {
    const { id } = req.params;

    Accounts.findById(id, (err, account) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!account) {
        res.status(404).send({ message: 'Account não encontrada.' });
      } else {
        res.status(200).send(account);
      }
    });
  };

  static atualizarAccount = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndUpdate(id, req.body, (err, account) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!account) {
        res.status(404).send({ message: 'Account não encontrada.' });
      } else {
        res.status(204).send({ message: 'Account atualizada com sucesso.' });
      }
    });
  };

  static excluirAccount = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndDelete(id, (err, account) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!account) {
        res.status(404).send({ message: 'Account não encontrada.' });
      } else {
        res.status(200).send({ message: 'Account excluída com sucesso.' });
      }
    });
  };
}

export default AccountController;
