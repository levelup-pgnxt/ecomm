import Chance from 'chance';

const DATATEST = [
    { email: 'teste@teste.com', senha: '123456' },
    { nome: 12345, email: 'teste@teste.com', senha: '123456' },
    { nome: "", email: 'teste@teste.com', senha: '123456' },
    { nome: "Paulo", email: 'teste@teste.com', senha: '123456' },
    { nome: "Paulo Leite", senha: '123456' },
    { nome: "Lauro Augusto", email: 123456, senha: '123456' },
    { nome: "Lauro Augusto", email: '', senha: '123456' },
    { nome: "Lauro Augusto", email: 'testeteste.com', senha: '123456' },
    { nome: "Alnat Casado", email: 'teste@teste.com.br' },
    { nome: "Alnat Casado", email: 'teste@teste.com.br', senha: 123456 },
    { nome: "Alnat Casado", email: 'teste@teste.com.br', senha: '123' },
    { nome: "Alnat Casado", email: 'teste@teste.com.br', senha: '' },
    { nome: "Alnat Casado", email: 'casadoalnat@gmail.com', senha: '123456' },
    { nome: "Tânia Gusmão", email: 'tania@hotmail.com', senha: '123456' },
    { nome: "Julha Esmeralda", email: 'esmeralda@uol.com.br', senha: '123456' },
    { nome: "Ednaldo Bandeira", email: 'edbandeira@caetes.com.br', senha: '123456' },
    { nome: "Annie Rossiter", email: 'annie@gmail.com', senha: '123456' },
];

const chance = new Chance;
const DATAUSERS = [];
const QTD_USERS = 100;

for (let ind = 1; ind <= QTD_USERS; ind += 1) {
    const nome = chance.name({ nationality: 'it', middle: true });
    const email = chance.email({ domain: 'testes.com' });
    const senha = chance.string({ length: 6 });
    DATAUSERS.push({ nome, email, senha });
}

export { DATATEST, DATAUSERS };
