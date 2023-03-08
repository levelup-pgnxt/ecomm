// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcryptjs';
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

  static criarAccount = async (req, res) => {
    const senha = req.body.password;
    const senhaValida = await AccountController.validarSenha(senha);

    if (!senhaValida) {
      res.status(400).send({ message: 'A senha não atende aos requisitos de segurança' });
      return;
    }

    const senhaHash = await AccountController.gerarSenhaHash(senha);

    const account = new Accounts(req.body);
    account.password = senhaHash;

    account.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        account.password = senhaHash;
        res.status(201).send(account.toJSON());
      }
    });
  };

  static validarSenha(senha) {
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%**#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regexSenha.test(senha);
  }

  static gerarSenhaHash(senha) {
    const custoHash = 12;
    return bcrypt.hash(senha, custoHash);
  }

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
