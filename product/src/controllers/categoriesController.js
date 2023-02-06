import CategoryService from '../services/categoriesService.js';
import validates from '../services/utils.js';
import NotFoundError from '../errors/NotFoundError.js';

class CategoryController {

    static getAllCategories = async (_req, res) => {
        const listCategories = await CategoryService.getAllCategories();
        res.status(200).json(listCategories);
    };

    static getCategoryById = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const category = await CategoryService.getCategoryById(id);
            if (!category) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(200).json(category);
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static getCategoryByName = async (req, res) => {
        const { categories } = req.query;
        const searchName = new RegExp(`${categories}.*`, 'igm');
        const result = await CategoryService.getCategoryByName(searchName);
        if (!result) {
            res.status(404).send({ message: 'Categoria não localizada!' });
        } else {
            res.status(200).json(result);
        };
    };

    static createCategory = async (req, res) => {
        const { nome } = validates.paramsCategory(req.body);
        const isExist = await CategoryService.checkIsExistsCategory(nome);
        if (isExist) {
            const message = 'Categoria já cadastrada!';
            throw new NotFoundError(message);
        } else {
            const status = 'ATIVA';
            const newCategory = await CategoryService.createCategory({ nome: nome, status: status });
            res.status(201).send(newCategory.toJSON());
        }
    };

    static updateCategory = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const { nome } = validates.paramsCategory(req.body);
            const updateCategory = await CategoryService.updateCategory(id, nome);
            if (!updateCategory) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(201).send({ message: 'Categoria atualizada!' });
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static activateDeactivateCategory = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
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
                await CategoryService.activateDeactivateCategory(id, status);
                res.status(201).send({ message: `Status da categoria atualizado para "${status}"!` });
            }
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static deleteCategoryById = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const deleteCategory = await CategoryService.deleteCategoryById(id);
            if (!deleteCategory) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(204);
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };
};

export default CategoryController;
