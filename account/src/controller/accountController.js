// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcryptjs';
import Account from '../models/Account.js';
import criaTokenTJWT from '../authentication/generateToken.js';
import addTokenToBlocklist from '../../redis/manipulaBlocklist.js';

class AccountController {
  static listarAccounts = (req, res) => {
    Account.find((err, accounts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(accounts);
    });
  };

  static criarAccount = async (req, res) => {
    const senha = req.body.password;
    const senhaValida = await this.validarSenha(senha);

    if (!senhaValida) {
      res.status(400).send({ message: 'A senha não atende aos requisitos de segurança' });
      return;
    }

    const senhaHash = await this.gerarSenhaHash(senha);

    const account = new Account(req.body);
    account.password = senhaHash;

    account.save((err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        const accountWithoutPassword = account.toObject();
        delete accountWithoutPassword.password;
        res.status(201).send(accountWithoutPassword);
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

  static login = (req, res) => {
    const token = criaTokenTJWT(req.user);
    res.set('Authorization', token);
    res.status(204).send();
  };

  static logout = async (req, res) => {
    try {
      const { authorization } = req.headers;
      let token;
      if (authorization.startsWith('Bearer ')) {
        token = authorization.substring(7, authorization.length);
      }
      await addTokenToBlocklist(token);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static listarAccountPorId = (req, res) => {
    const { id } = req.params;

    Account.findById(id, (err, account) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!account) {
        res.status(404).send({ message: 'Account não encontrada.' });
      } else {
        res.status(200).send(account);
      }
    });
  };

  static async buscaPorEmail(email) {
    const account = await Account.findOne({ email });

    return account;
  }

  static atualizarAccount = (req, res) => {
    const { id } = req.params;

    Account.findByIdAndUpdate(id, req.body, (err, account) => {
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

    Account.findByIdAndDelete(id, (err, account) => {
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
