import createUserAccount from '../src/use-case/createUserAccount';
import DATATEST from '../tests/data-tests/dataTest';

describe('Função creteUserAccount', () => {

    describe('Verificar o campo nome', () => {
        describe('Verificar se campo nome é passado', () => {
            it('Retorna a mensagem O campo "nome" é obrigatório!', () => {
                expect(createUserAccount(DATATEST[0]))
                .toBe('O campo "nome" é obrigatório!');
            });
        })
        describe('Verificar se campo nome é um texto', () => {
             it('Retorna a mensagem O campo "nome" deve ser do tipo texto', () => {
                expect(createUserAccount(DATATEST[1]))
                .toBe('O campo "nome" deve ser do tipo texto!');
            });
        })
        describe('Verificar preenchimentos correto do campo nome', () => {
            it('Retorna a mensagem O campo "nome" não deve ser vazio', () => {
                expect(createUserAccount(DATATEST[2]))
                .toBe('O campo "nome" não deve ser vazio!');
            });
        })
        describe('Verificar se o campo nome possui o tamanho mínimo especificado', () => {
            const limit = 6;
            it(`Retorna a mensagem 'O campo "nome" deve ter no mínimo ${limit} caracteres'`, () => {
                expect(createUserAccount(DATATEST[3]))
                .toBe(`'O campo "nome" deve ter no mínimo ${limit} caracteres!'`);
            });
        })
    });

    describe('Verificar o campo email', () => {
        describe('Verificar se campo email é passado', () => {
            it('Retorna a mensagem O campo "email" é obrigatório!', () => {
                expect(createUserAccount(DATATEST[4]))
                .toBe('O campo "email" é obrigatório!');
           });
        })
        describe('Verificar se campo email é um string', () => {
            it('Retorna a mensagem O campo "email" deve ser do tipo string', () => {
                expect(createUserAccount(DATATEST[5]))
                .toBe('O campo "email" deve ser do tipo string!');
           });
        })
        describe('Verificar se campo email está preenchido', () => {
            it('Retorna a mensagem O campo "email" não deve ser vazio!', () => {
                expect(createUserAccount(DATATEST[6]))
                .toBe('O campo "email" não deve ser vazio!');
           });
        })
        describe('Verificar se o campo possui um email válido', () => {
            it('Retorna a mensagem O campo dever ser um "email" válido!', () => {
                expect(createUserAccount(DATATEST[7]))
                .toBe('O campo dever ser um "email" válido!');
            });
        })
    });

    describe('Verificar o campo senha', () => {
        describe('Verificar se campo senha é passado', () => {
            it('Retorna a mensagem O campo "senha" é obrigatório!', () => {
                expect(createUserAccount(DATATEST[8]))
                .toBe('O campo "senha" é obrigatório!');
           });
        })
        describe('Verificar se campo senha é um string', () => {
            it('Retorna a mensagem O campo "senha" deve ser do tipo string', () => {
                expect(createUserAccount(DATATEST[9]))
                .toBe('O campo "senha" deve ser do tipo string!');
           });
        })
        describe('Verificar se o campo possui o senha possui o tamanho mínimo especificado', () => {
            const limit = 6;
            it(`'Retorna a mensagem O campo "senha" deve ter no mínimo ${limit} caracteres'`, () => {
                expect(createUserAccount(DATATEST[10]))
                .toBe(`'O campo "senha" deve ter no mínimo ${limit} caracteres!'`);
            });
        })
        describe('Verificar se campo senha está preenchido', () => {
            it('Retorna a mensagem O campo "senha" não deve ser vazio!', () => {
                expect(createUserAccount(DATATEST[11]))
                .toBe('O campo "senha" não deve ser vazio!');
           });
        })
    });
});
