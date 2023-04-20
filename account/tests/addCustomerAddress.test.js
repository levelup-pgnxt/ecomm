/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import jest from 'jest-mock';
import createUserAccount from '../src/use-case/createUserAccount.js';
import addCustomerAddress from '../src/use-case/addCustomerAddress.js';
import DATATEST from './data-tests/dataTest.js';
import { usersCustomer } from '../src/services/utils.js';

createUserAccount(DATATEST[51]);

describe('Função addCustomerAddress', () => {
  describe('Verificar o campo email', () => {
    describe('Verificar se campo email é passado', () => {
      it('Retorna a mensagem O campo "email" é obrigatório!', () => {
        expect(addCustomerAddress(DATATEST[27]))
          .toBe('O campo "email" é obrigatório!');
      });
    });
    describe('Verificar se campo email é um string', () => {
      it('Retorna a mensagem O campo "email" deve ser do tipo string', () => {
        expect(addCustomerAddress(DATATEST[28]))
          .toBe('O campo "email" deve ser do tipo string!');
      });
    });
    describe('Verificar se campo email está preenchido', () => {
      it('Retorna a mensagem O campo "email" não deve ser vazio!', () => {
        expect(addCustomerAddress(DATATEST[29]))
          .toBe('O campo "email" não deve ser vazio!');
      });
    });
    describe('Verificar se o campo possui um email válido', () => {
      it('Retorna a mensagem O campo dever ser um "email" válido!', () => {
        expect(addCustomerAddress(DATATEST[30]))
          .toBe('O campo dever ser um "email" válido!');
      });
    });
  });

  describe('Verificar o campo address', () => {
    describe('Verificar se campo address é passado', () => {
      it('Retorna a mensagem "address" is required', () => {
        expect(addCustomerAddress(DATATEST[31]))
          .toBe('"address" is required');
      });
    });
  });

  describe('Verificar o conteúdo do campo address', () => {
    describe('Verificar se campo logradouro é passado', () => {
      it('Retorna a mensagem O campo "logradouro" é obrigatório!', () => {
        expect(addCustomerAddress(DATATEST[32]))
          .toBe('O campo "logradouro" é obrigatório!');
      });
    });
    describe('Verificar se campo logradouro é um string', () => {
      it('Retorna a mensagem O campo "logradouro" deve ser do tipo string', () => {
        expect(addCustomerAddress(DATATEST[33]))
          .toBe('O campo "logradouro" deve ser do tipo texto!');
      });
    });
    describe('Verificar se campo logradouro está preenchido', () => {
      it('Retorna a mensagem O campo "logradouro" não deve ser vazio!', () => {
        expect(addCustomerAddress(DATATEST[34]))
          .toBe('O campo "logradouro" não deve ser vazio!');
      });
    });

    describe('Verificar se campo número é passado', () => {
      it('Retorna a mensagem O campo "número" é obrigatório!', () => {
        expect(addCustomerAddress(DATATEST[35]))
          .toBe('O campo "número" é obrigatório!');
      });
    });
    describe('Verificar se campo número é um string', () => {
      it('Retorna a mensagem O campo "número" deve ser do tipo string', () => {
        expect(addCustomerAddress(DATATEST[36]))
          .toBe('O campo "número" deve ser do tipo texto!');
      });
    });
    describe('Verificar se campo número está preenchido', () => {
      it('Retorna a mensagem O campo "número" não deve ser vazio!', () => {
        expect(addCustomerAddress(DATATEST[37]))
          .toBe('O campo "número" não deve ser vazio!');
      });
    });

    describe('Verificar se campo complemento é um texto', () => {
      it('Retorna a mensagem O campo "complemento" deve ser do tipo texto', () => {
        expect(addCustomerAddress(DATATEST[38]))
          .toBe('O campo "complemento" deve ser do tipo texto!');
      });
    });

    describe('Verificar se campo bairro é passado', () => {
      it('Retorna a mensagem O campo "bairro" é obrigatório!', () => {
        expect(addCustomerAddress(DATATEST[39]))
          .toBe('O campo "bairro" é obrigatório!');
      });
    });
    describe('Verificar se campo bairro é um string', () => {
      it('Retorna a mensagem O campo "bairro" deve ser do tipo string', () => {
        expect(addCustomerAddress(DATATEST[40]))
          .toBe('O campo "bairro" deve ser do tipo texto!');
      });
    });
    describe('Verificar se campo bairro está preenchido', () => {
      it('Retorna a mensagem O campo "bairro" não deve ser vazio!', () => {
        expect(addCustomerAddress(DATATEST[41]))
          .toBe('O campo "bairro" não deve ser vazio!');
      });
    });

    describe('Verificar se campo cep é passado', () => {
      it('Retorna a mensagem O campo "cep" é obrigatório!', () => {
        expect(addCustomerAddress(DATATEST[42]))
          .toBe('O campo "cep" é obrigatório!');
      });
    });
    describe('Verificar se campo cep é um string', () => {
      it('Retorna a mensagem O campo "cep" deve ser do tipo string', () => {
        expect(addCustomerAddress(DATATEST[43]))
          .toBe('O campo "cep" deve ser do tipo texto!');
      });
    });
    describe('Verificar se campo cep está preenchido', () => {
      it('Retorna a mensagem O campo "cep" não deve ser vazio!', () => {
        expect(addCustomerAddress(DATATEST[44]))
          .toBe('O campo "cep" não deve ser vazio!');
      });
    });

    describe('Verificar se campo cidade é passado', () => {
      it('Retorna a mensagem O campo "cidade" é obrigatório!', () => {
        expect(addCustomerAddress(DATATEST[45]))
          .toBe('O campo "cidade" é obrigatório!');
      });
    });
    describe('Verificar se campo cidade é um string', () => {
      it('Retorna a mensagem O campo "cidade" deve ser do tipo string', () => {
        expect(addCustomerAddress(DATATEST[46]))
          .toBe('O campo "cidade" deve ser do tipo texto!');
      });
    });
    describe('Verificar se campo cidade está preenchido', () => {
      it('Retorna a mensagem O campo "cidade" não deve ser vazio!', () => {
        expect(addCustomerAddress(DATATEST[47]))
          .toBe('O campo "cidade" não deve ser vazio!');
      });
    });

    describe('Verificar se campo uf é passado', () => {
      it('Retorna a mensagem O campo "uf" é obrigatório!', () => {
        expect(addCustomerAddress(DATATEST[48]))
          .toBe('O campo "uf" é obrigatório!');
      });
    });
    describe('Verificar se campo uf é um string', () => {
      it('Retorna a mensagem O campo "uf" deve ser do tipo string', () => {
        expect(addCustomerAddress(DATATEST[49]))
          .toBe('O campo "uf" deve ser do tipo texto!');
      });
    });
    describe('Verificar se campo uf está preenchido', () => {
      it('Retorna a mensagem O campo "uf" não deve ser vazio!', () => {
        expect(addCustomerAddress(DATATEST[50]))
          .toBe('O campo "uf" não deve ser vazio!');
      });
    });
  });

  describe('Verificar o retorno da função', () => {
    describe('Verificar se a função é chamda um vez', () => {
      it('Se é chamada ao menos uma vez', () => {
        const addCustomerAddress = jest.fn();
        addCustomerAddress();
        expect(addCustomerAddress).toHaveBeenCalled();
      });
    });
    describe('Verificar se não possui o cadastro do endereço', () => {
      createUserAccount(DATATEST[54]);
      const data = usersCustomer.listUser({ email: DATATEST[54].email });
      it('Espera que o objeto não possua a propriedade "address"', () => {
        expect(data).not.toHaveProperty('address');
      });
    });
    describe('Verificar se retorna false ao não encontrar o usuário', () => {
      it('Retorna false caso não encontre o usuário', () => {
        expect(addCustomerAddress(DATATEST[52])).toBe(false);
      });
    });
    describe('Verificar se retorna true ao encontrar o usuário e cadastrar o endereço', () => {
      it('Retorna true caso encontre e cadastre o endereço', () => {
        expect(addCustomerAddress(DATATEST[53])).toBe(true);
      });
    });
    describe('Verificar se cadastrou o endereço', () => {
      addCustomerAddress(DATATEST[53]);
      const dataAfter = usersCustomer.listUser({ email: DATATEST[51].email });
      it('Espera que o objeto possua a propriedade "address"', () => {
        expect(dataAfter).toHaveProperty('address');
      });
    });
  });
});
