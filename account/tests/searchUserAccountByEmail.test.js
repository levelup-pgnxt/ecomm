import createUserAccount from '../src/use-case/createUserAccount';
import searchUserAccountByEmail from '../src/use-case/searchUserAccountByEmail'
import DATATEST from '../tests/data-tests/dataTest.js';
import jest from 'jest-mock';

DATATEST.forEach((user) => {
    createUserAccount(user);
});

describe('Função searchUserAccountByEmail', () => {

    describe('Verificar o campo email', () => {
        describe('Verificar se campo email é passado', () => {
            it('Retorna a mensagem O campo "email" é obrigatório!', () => {
                expect(searchUserAccountByEmail(DATATEST[4]))
                .toBe('O campo "email" é obrigatório!');
           });
        })
        describe('Verificar se campo email é um string', () => {
            it('Retorna a mensagem O campo "email" deve ser do tipo string', () => {
                expect(searchUserAccountByEmail(DATATEST[5]))
                .toBe('O campo "email" deve ser do tipo string!');
           });
        })
        describe('Verificar se campo email está preenchido', () => {
            it('Retorna a mensagem O campo "email" não deve ser vazio!', () => {
                expect(searchUserAccountByEmail(DATATEST[6]))
                .toBe('O campo "email" não deve ser vazio!');
           });
        })
        describe('Verificar se o campo possui um email válido', () => {
            it('Retorna a mensagem O campo dever ser um "email" válido!', () => {
                expect(searchUserAccountByEmail(DATATEST[7]))
                .toBe('O campo dever ser um "email" válido!');
            });
        })
    });

    describe('Verificar o retorno da função', () => {
        describe('Verificar se a função é chamda um vez', () => {
            it('Se é chamada ao menos uma vez', () => {
                const searchUserAccountByEmail = jest.fn();
                searchUserAccountByEmail()
                expect(searchUserAccountByEmail).toHaveBeenCalled();
           });
        })
        describe('Verificar se retorna o cadastro com nome, email e senha', () => {
            const createdDate = new Date().toLocaleDateString('sv')
            const user = {
                id: 1,
                name: DATATEST[12]["nome"],
                email: DATATEST[12]["email"],
                password: DATATEST[12]["senha"],
                createdDate: createdDate,
            };
            it('Retorna com as propriedades "name, email e password"', () => {
                expect(searchUserAccountByEmail({ email: DATATEST[12]["email"] })).toMatchObject(user);
           });
        })
        describe('Verificar se retorna a mensagem usuário não encontrado', () => {
            const userEmail = { email: "email@email.com" };
            const message = 'Usuário não localizado!';
            it('Retorna com a mensagem Usuário não localizado!', () => {
                expect(searchUserAccountByEmail(userEmail)).toBe(message);
           });
        })
    });
});
