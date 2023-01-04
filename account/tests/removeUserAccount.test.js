import createUserAccount from '../src/use-case/createUserAccount.js';
import removeUserAccount from '../src/use-case/removeUserAccount.js';
import { DATATEST } from '../tests/data-tests/dataTest.js';
import { usersCustomer } from '../src/services/utils.js';
import jest from 'jest-mock';

DATATEST.forEach((user) => {
    createUserAccount(user);
})

describe('Função removeUserAccount', () => {

    describe('Verificar o campo email', () => {
        describe('Verificar se campo email é passado', () => {
            it('Retorna a mensagem O campo "email" é obrigatório!', () => {
                expect(removeUserAccount(DATATEST[4]))
                .toBe('O campo "email" é obrigatório!');
           });
        })
        describe('Verificar se campo email é um string', () => {
            it('Retorna a mensagem O campo "email" deve ser do tipo string', () => {
                expect(removeUserAccount(DATATEST[5]))
                .toBe('O campo "email" deve ser do tipo string!');
           });
        })
        describe('Verificar se campo email está preenchido', () => {
            it('Retorna a mensagem O campo "email" não deve ser vazio!', () => {
                expect(removeUserAccount(DATATEST[6]))
                .toBe('O campo "email" não deve ser vazio!');
           });
        })
        describe('Verificar se o campo possui um email válido', () => {
            it('Retorna a mensagem O campo dever ser um "email" válido!', () => {
                expect(removeUserAccount(DATATEST[7]))
                .toBe('O campo dever ser um "email" válido!');
            });
        })
    });

    describe('Verificar o retorno da função', () => {
        describe('Verificar se a função é chamda um vez', () => {
            it('Se é chamada ao menos uma vez', () => {
                const removeUserAccount = jest.fn();
                removeUserAccount()
                expect(removeUserAccount).toHaveBeenCalled();
           });
        })
        describe('Verificar se retorna false ao não encontrar o usário', () => {
            it('Retorna false caso não encontre o usuário', () => {
                expect(removeUserAccount({ email: "email@email.com" })).toBe(false);
           });
        })
        describe('Verificar se retorna true ao encontrar e remover o usário', () => {
            it('Retorna true caso encontre e remova o usuário', () => {
                expect(removeUserAccount({ email: "annie@gmail.com" })).toBe(true);
           });
        })
        describe('Verificar se o tamanho do array modificou após a remocão', () => {
            const sizeBefore = usersCustomer._getLength();
            removeUserAccount({ email: "edbandeira@caetes.com.br" });
            const sizeAfter = usersCustomer._getLength();
            it('Espera que o tamanho do array esteja menor', () => {
                expect(sizeAfter).not.toEqual(sizeBefore);
           });
        })
    });
});
