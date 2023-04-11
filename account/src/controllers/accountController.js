import accounts from '../models/account.js';

class AccountController {
  static listarAccounts = (req, res) => {
    accounts.find((err, users) => {
      if (err) {
        return res
          .status(400)
          .send({ message: `${err.message} - Falha ao encontrar usuário.` });
      }
      return res.status(200).send(users);
    });
  };

  static inserirAccounts = (req, res) => {
    const category = new accounts(req.body);

    category.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - falha ao cadastrar um usuário.`,
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
          message: `${err.message} - Id do usuário não localizado.`,
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
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: 'Categoria atualizada com sucesso' });
      }
    });
  };

  static excluirAccounts = (req, res) => {
    const { id } = req.params;

    accounts.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: 'Categoria removida com sucesso' });
        // se colocar 204 a mensagem não aparece
      }
    });
  };
  // atualizou um Accounts
}

export default AccountController;

// utilizado para criar "funções" que realizarão as funções, como buscar, excluir e etc
