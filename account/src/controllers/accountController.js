import bcrypt from 'bcryptjs';
import accounts from '../models/account.js';

function gerarSenhaHash(senha) {
  const custoHash = 12;
  return bcrypt.hash(senha, custoHash);
}

class AccountController {
  static listarAccounts = (req, res) => {
    accounts.find((err, users) => {
      if (err) {
        return res
          .status(400)
          .send({ message: `${err.message} - Informações não encontradas.` });
      }
      return res.status(200).send(users);
    });
  };

  static inserirAccounts = async (req, res) => {
    const category = new accounts(req.body);
    const senhaUser = await gerarSenhaHash(req.body.senhaHash);
    category.senhaHash = senhaUser;
    category.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - falha ao cadastrar uma categoria.`,
        });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };
  // foi inserido uma categoria

  static listarAccountsPorId = (req, res) => {
    const { id } = req.params;

    accounts.findById(id, (err, category) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - Id da categoria não localizado.`,
        });
      } else {
        res.status(200).send(category);
      }
    });

    // busquei by id
  };

  static atualizarAccounts = (req, res) => {
    const { id } = req.params;

    accounts.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria atualizada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  //   static ativarAccounts = (req, res) => {
  //     const { id } = req.params;

  //     accounts.findByIdAndUpdate(id, { $set: { STATUS: 'ATIVA' } }, (err) => {
  //       if (!err) {
  //         res.status(200).send({ message: 'Categoria atualizada com sucesso' });
  //       } else {
  //         res.status(500).send({ message: err.message });
  //       }
  //     });
  //   };

  static excluirAccounts = (req, res) => {
    const { id } = req.params;

    accounts.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria removida com sucesso' });
        // se colocar 204 a mensagem não aparece
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  // atualizou um Accounts
}

/*

***importante*** abrir chaves
}
*/
export default AccountController;

// utilizado para criar "funções" que realizarão as funções, como buscar, excluir e etc
