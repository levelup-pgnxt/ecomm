import createUserAccount from '../src/use-case/createUserAccount';

const DATATEST = [
    { email: 'teste@teste.com', senha: '123456' },
    { nome: 12345, email: 'teste@teste.com', senha: '123456' },
    { nome: "", email: 'teste@teste.com', senha: '123456' },
    { nome: "Paulo", email: 'teste@teste.com', senha: '123456' },
    { nome: "Paulo Leite", senha: '123456' },
];

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
            it('Retorna a mensagem O campo "email" deve ser do tipo string', () => {
                expect(createUserAccount(nome, email, senha))
                .toBe('O campo "email" deve ser do tipo string!');
           });
        })
        describe('Verificar se campo email é um string', () => {
            const nome = "Paulo Leite";
            const email = 123456;
            const senha = "123456";
            it('Retorna a mensagem O campo "email" deve ser do tipo string', () => {
                expect(createUserAccount(nome, email, senha))
                .toBe('O campo "email" deve ser do tipo string!');
           });
        })
        describe('Verificar se o campo possui um email válido', () => {
            const nome = "Paulo Leite";
            const email = "testeemailcom";
            const senha = "123456";
            it('Retorna a mensagem O campo dever ser um "email" válido', () => {
                expect(createUserAccount(nome, email, senha))
                .toBe('O campo dever ser um "email" válido!');
            });
        })
        describe('Verificar se o campo email está preenchido', () => {
            const nome = "Paulo Leite";
            const email = "";
            const senha = "123456";
            it('Retorna a mensagem O campo "email" não deve ser vazio', () => {
                expect(createUserAccount(nome, email, senha))
                .toBe('O campo "email" não deve ser vazio');
            });
        })
    });
});
