import createUserAccount from '../src/use-case/createUserAccount.js';
import addCustomerAddress from '../src/use-case/addCustomerAddress.js'
import getUsersCustomerByState from '../src/use-case/getUsersCustomerByState.js';
import DATA_USERS from './data-tests/dataUsers.js';
import DATA_USERS_ADDRESS from './data-tests/dataUsersAddress.js'; 
import jest from 'jest-mock';

DATA_USERS.forEach((user) => {
    createUserAccount(user);
});

DATA_USERS_ADDRESS.forEach((user) => {
    addCustomerAddress(user);
});

describe('Função getUsersCustomerByState', () => {

    describe('Verificar o campo "uf"', () => {
        describe('Verificar se campo "uf" é passado', () => {
            it('Retorna a mensagem O campo "uf" é obrigatório!', () => {
                expect(getUsersCustomerByState({}))
                .toBe('O campo "uf" é obrigatório!');
           });
        })
        describe('Verificar se campo "uf" é um string', () => {
            it('Retorna a mensagem O campo "uf" deve ser do tipo string', () => {
                expect(getUsersCustomerByState({ uf: 22 }))
                .toBe('O campo "uf" deve ser do tipo texto!');
           });
        })
        describe('Verificar se campo "uf" está preenchido', () => {
            it('Retorna a mensagem O campo "uf" não deve ser vazio!', () => {
                expect(getUsersCustomerByState({ uf: '' }))
                .toBe('O campo "uf" não deve ser vazio!');
           });
        })
    });

    describe('Verificar o retorno da função', () => {
        describe('Verificar se a função é chamda um vez', () => {
            it('Se é chamada ao menos uma vez', () => {
                const getUsersCustomerByState = jest.fn();
                getUsersCustomerByState()
                expect(getUsersCustomerByState).toHaveBeenCalled();
           });
        })
        describe('Verificar se retorna o estado solicitado', () => {
            const result = getUsersCustomerByState({ uf: "AL" });
            it('Retorna lista de usuário do estado solicitado', () => {
                expect(result[0].address.uf).toBe("AL");
           });
        })
        describe('Verificar se retorna um array vazio se passado um estado não existente', () => {
            const result = getUsersCustomerByState({ uf: "LL" });
            it('Retorna um lista vazia', () => {
                expect(result).toEqual([]);
           });
        })
    });
});
