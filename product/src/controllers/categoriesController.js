/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import CategoryService from '../services/categoriesService.js';
import validates from '../auxiliaries/utils.js';
import NotFoundError from '../errors/NotFoundError.js';

class CategoryController {
  static getAllCategories = async (_req, res) => {
    const listCategories = await CategoryService.getAllCategories();
    res.status(200).json(listCategories);
  };

  static getCategoryById = async (req, res) => {
    const { id } = req.params;
    validates.paramsID(id);
    const category = await CategoryService.getCategoryById(id);
    if (!category) {
      res.status(404).send({ message: 'Categoria não localizada!' });
    } else {
      res.status(200).json(category);
    }
  };

  static getCategoryByName = async (req, res) => {
    const { categories } = req.query;
    const searchName = new RegExp(`${categories}.*`, 'igm');
    const result = await CategoryService.getCategoryByName(searchName);
    res.status(200).json(result);
  };

  static createCategory = async (req, res) => {
    const { nome } = validates.paramsCategory(req.body);
    await validates.checkIsExistsCategory(nome);
    const status = 'ATIVA';
    const newCategory = await CategoryService.createCategory({ nome, status });
    res.status(201)
      .set('Location', `/categories/${newCategory._id}`)
      .send(newCategory.toJSON());
  };

  static updateCategory = async (req, res) => {
    const { id } = req.params;
    validates.paramsID(id);

    const { nome } = validates.paramsCategory(req.body);
    await validates.checkIsExistsCategory(nome);

    const updateCategory = await CategoryService.updateCategory(id, nome);
    if (!updateCategory) {
      res.status(404).send({ message: 'Categoria não localizada!' });
    } else {
      res.status(201).send({ message: 'Categoria atualizada!' });
    }
  };

  static changeStatusCategory = async (req, res) => {
    const { id } = req.params;
    validates.paramsID(id);

    const dataCategory = await CategoryService.getCategoryById(id);
    if (!dataCategory) {
      res.status(404).send({ message: 'Categoria não localizada!' });
    } else {
      let { status } = dataCategory;
      if (status === 'ATIVA') {
        status = 'INATIVA';
      } else {
        status = 'ATIVA';
      }
      await CategoryService.changeStatusCategory(id, status);
      res.status(200).send({ message: `Status da categoria atualizado para "${status}"!` });
    }
  };

  static deleteCategoryById = async (req, res) => {
    const { id } = req.params;
    validates.paramsID(id);

    const deleteCategory = await CategoryService.deleteCategoryById(id);
    if (!deleteCategory) {
      const message = 'Categoria não localizada!';
      throw new NotFoundError(message);
    }
    res.status(204).send();
  };
}

export default CategoryController;
