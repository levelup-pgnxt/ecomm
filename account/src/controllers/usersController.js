/* eslint-disable import/extensions */
import UserService from '../services/usersService.js';
import validates from '../services/auxiliaries.js';
import NotFoundError from '../errors/NotFoundError.js';
import { createHashWithSalt } from '../authentication/passwordManagement.js';
import createTokenJWT from '../authentication/tokenManagement.js';

class UserController {
  static login = (req, res) => {
    const token = createTokenJWT(req.user);

    res.set('Authorization', token);
    res.status(204).send();
  };

  static getAllUsers = async (_req, res) => {
    const listUsers = await UserService.getAllUsers();
    res.status(200).json(listUsers);
  };

  static getUserById = async (req, res) => {
    const { id } = req.params;
    const isValideID = validates.paramsID(id);

    if (!isValideID) {
      res.status(400).send({ message: 'ID inválido!' });
    }

    const user = await UserService.getUserById(id);
    if (!user) {
      res.status(404).send({ message: 'Usuário não localizado!' });
    } else {
      res.status(200).json(user);
    }
  };

  static getUserByName = async (req, res) => {
    const { users } = req.query;
    const searchName = new RegExp(`${users}.*`, 'igm');
    const result = await UserService.getUserByName(searchName);
    if (!result) {
      res.status(404).send({ message: 'Usuário não localizado!' });
    } else {
      res.status(200).json(result);
    }
  };

  static createUser = async (req, res) => {
    const {
      email, senha, cpf, endereco,
    } = validates.paramsUser(req.body);
    const { uf } = endereco;

    const isExist = await UserService.checkIsExistsUser(email);
    if (isExist) {
      const message = 'Usuário já cadastrado!';
      throw new NotFoundError(message);
    }

    validates.paramsPassword(senha);
    validates.paramsCPF(cpf);
    validates.paramsUf(uf);

    req.body.senha = await createHashWithSalt(req.body.senha);

    const newUser = await UserService.createUser(req.body);
    res.status(201).send(newUser.toJSON());
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;
    const isValideID = validates.paramsID(id);

    if (!isValideID) {
      res.status(400).send({ message: 'ID inválido!' });
    }

    const { senha, cpf, endereco } = validates.paramsUser(req.body);
    const { uf } = endereco;

    validates.paramsPassword(senha);
    validates.paramsCPF(cpf);
    validates.paramsUf(uf);

    req.body.senha = await createHashWithSalt(req.body.senha);

    const updateUser = await UserService.updateUser(id, req.body);
    if (!updateUser) {
      res.status(404).send({ message: 'Usuário não localizado!' });
    } else {
      res.status(201).send({ message: 'Usuário atualizado!' });
    }
  };

  static deleteUserById = async (req, res) => {
    const { id } = req.params;
    const isValideID = validates.paramsID(id);

    if (!isValideID) {
      res.status(400).send({ message: 'ID inválido!' });
    }

    const deleteUser = await UserService.deleteUserById(id);
    if (!deleteUser) {
      res.status(404).send({ message: 'Usuário não localizado!' });
    } else {
      res.status(204);
    }
  };
}

export default UserController;
