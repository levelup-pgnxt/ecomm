/* eslint-disable no-shadow */
import users from '../models/User.js';

// eslint-disable-next-line import/extensions
import hashPassword from '../middlewares/hashPassword.js';

class UserController {
  static listUsers = (req, res) => {
    // eslint-disable-next-line array-callback-return
    users.find((err, users) => {
      res.status(200).json(users);
    });
  };

  static insertUser = async (req, res) => {
    const user = new users(req.body);

    user.password = await hashPassword(req.body.password);

    user.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` });
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };

  static listUserById = (req, res) => {
    const { id } = req.params;

    users.findById(id, (err, users) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id do Usuário não localizado.` });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static findUserEmail = (req, res) => {
    const { email } = req.params;

    users.findOne(email, (err, users) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Email não cadastrado.` });
      } else {
        res.status(200).send(users);
      }
    });
  };

  static updateUser = (req, res) => {
    const { id } = req.params;

    users.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Usuário atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteUser = (req, res) => {
    const { id } = req.params;

    users.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Usuário removido com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static login = (req, res) => {
    res.status(204).send();
  };
}

export default UserController;
