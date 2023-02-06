import UserService from '../services/usersService.js';
import validates from '../services/auxiliaries.js';
import NotFoundError from '../errors/NotFoundError.js';
import md5 from 'md5';

class UserController {

    static getAllUsers = async (_req, res) => {
        const listUsers = await UserService.getAllUsers();
        res.status(200).json(listUsers);
    };

    static getUserById = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const category = await UserService.getUserById(id);
            if (!category) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(200).json(category);
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static getUserByName = async (req, res) => {
        const { users } = req.query;
        const searchName = new RegExp(`${users}.*`, 'igm');
        const result = await UserService.getUserByName(searchName);
        if (!result) {
            res.status(404).send({ message: 'Categoria não localizada!' });
        } else {
            res.status(200).json(result);
        };
    };

    static createUser = async (req, res) => {
        const { email, senha, cpf, endereco } = validates.paramsUser(req.body);
        const { uf } = endereco;

        const isValidPass = validates.paramsPassword(senha);
        if (!isValidPass) {
            const message = 'Senha inválida!';
            throw new NotFoundError(message);
        }

        const isValidCPF = validates.paramsCPF(cpf);
        if (!isValidCPF) {
            const message = 'CPF inválido!';
            throw new NotFoundError(message);
        }

        const isValidUF = validates.paramsUf(uf);
        if (!isValidUF) {
            const message = 'Estado da Federação inválido!';
            throw new NotFoundError(message);
        }

        const isExist = await UserService.checkIsExistsUser(email);
        if (isExist) {
            const message = 'Usuário já cadastrado!';
            throw new NotFoundError(message);
        }

        req.body.senha = md5(req.body.senha);

        const newUser = await UserService.createUser(req.body);
        res.status(201).send(newUser.toJSON());
    };

    static updateUser = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const { nome } = validates.paramsUser(req.body);
            const updateUser = await UserService.updateUser(id, nome);
            if (!updateUser) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(201).send({ message: 'Categoria atualizada!' });
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static activateDeactivateUser = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const dataUser = await UserService.getUserById(id);
            if (!dataUser) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                let { status } = dataUser;
                status === 'ATIVA' ? status = 'INATIVA' : status = 'ATIVA';
                await UserService.activateDeactivateUser(id, status);
                res.status(201).send({ message: `Status da categoria atualizado para "${status}"!` });
            }
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static deleteUserById = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const deleteUser = await UserService.deleteUserById(id);
            if (!deleteUser) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(204);
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };
};

export default UserController;
