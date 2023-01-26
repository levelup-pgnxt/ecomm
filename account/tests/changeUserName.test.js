import createUserAccount from '../src/use-case/createUserAccount.js';
import changeUserName from '../src/use-case/changeUserName.js';
import DATATEST from '../tests/data-tests/dataTest.js';
import { usersCustomer } from '../src/services/utils.js';
import jest from 'jest-mock';

DATATEST.forEach((user) => {
    createUserAccount(user);
})

describe('Função changeUserName', () => {

    describe('Verificar o campo email', () => {
        describe('Verificar se campo email é passado', () => {
            it('Retorna a mensagem O campo "email" é obrigatório!', () => {
                expect(changeUserName(DATATEST[21]))
                .toBe('O campo "email" é obrigatório!');
           });
        })
        describe('Verificar se campo email é um string', () => {
            it('Retorna a mensagem O campo "email" deve ser do tipo string', () => {
                expect(changeUserName(DATATEST[22]))
                .toBe('O campo "email" deve ser do tipo string!');
           });
        })
        describe('Verificar se campo email está preenchido', () => {
            it('Retorna a mensagem O campo "email" não deve ser vazio!', () => {
                expect(changeUserName(DATATEST[23]))
                .toBe('O campo "email" não deve ser vazio!');
           });
        })
        describe('Verificar se o campo possui um email válido', () => {
            it('Retorna a mensagem O campo dever ser um "email" válido!', () => {
                expect(changeUserName(DATATEST[24]))
                .toBe('O campo dever ser um "email" válido!');
            });
        })
    });

    describe('Verificar o campo newName', () => {
        describe('Verificar se campo newName é passado', () => {
            it('Retorna a mensagem O campo "newName" é obrigatório!', () => {
                expect(changeUserName(DATATEST[17]))
                .toBe('O campo "newName" é obrigatório!');
            });
        })
        describe('Verificar se campo newName é um texto', () => {
             it('Retorna a mensagem O campo "newName" deve ser do tipo texto', () => {
                expect(changeUserName(DATATEST[18]))
                .toBe('O campo "newName" deve ser do tipo texto!');
            });
        })
        describe('Verificar preenchimento correto do campo newName', () => {
            it('Retorna a mensagem O campo "newName" não deve ser vazio', () => {
                expect(changeUserName(DATATEST[19]))
                .toBe('O campo "newName" não deve ser vazio!');
            });
        })
        describe('Verificar se o campo nome possui o tamanho mínimo especificado', () => {
            const limit = 6;
            it(`Retorna a mensagem 'O campo "newName" deve ter no mínimo ${limit} caracteres'`, () => {
                expect(changeUserName(DATATEST[20]))
                .toBe(`'O campo "newName" deve ter no mínimo ${limit} caracteres!'`);
            });
        })
    });

    describe('Verificar o retorno da função', () => {
        describe('Verificar se a função é chamda um vez', () => {
            it('Se é chamada ao menos uma vez', () => {
                const changeUserName = jest.fn();
                changeUserName()
                expect(changeUserName).toHaveBeenCalled();
           });
        })
        describe('Verificar se retorna false ao não encontrar o usuário', () => {
            it('Retorna false caso não encontre o usuário', () => {
                expect(changeUserName(DATATEST[26])).toBe(false);
           });
        })
        describe('Verificar se retorna true ao encontrar e remover o usuário', () => {
            it('Retorna true caso encontre e remova o usuário', () => {
                expect(changeUserName(DATATEST[25])).toBe(true);
           });
        })
        describe('Verificar se o nome do usuário foi alterado', () => {
            const userNameBefore = usersCustomer.listUser({ email: "edbandeira@caetes.com.br" }).name;
            changeUserName({ email: "edbandeira@caetes.com.br", newName: "Edanaldo Bandeira Rios" });
            const userNameAfter = usersCustomer.listUser({ email: "edbandeira@caetes.com.br" }).name;
            it('Espera que o tamanho do array esteja menor', () => {
                expect(userNameAfter).not.toEqual(userNameBefore);
           });
        })
    });
});
