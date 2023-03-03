/* eslint-disable no-undef */
import CategoryModel from '../../models/categories';

describe('Testando o modelo categoies', () => {
  const objetoCategories = {
    NOME: 'INFORMÁTICA',
    STATUS: 'ATIVA',
  };
  it('Deve instanciar uma nova categoria', () => {
    const category = new CategoryModel(objetoCategories);
    expect(category).toEqual(
      expect.objectContaining(objetoCategories),
    );
  });
});
