import CategoryService from '../services/categoriesService.js';
import validates from '../services/utils.js';

class CategoryController {

    static getAllCategories = async (_req, res) => {
        const listCategories = await CategoryService.getAllCategories();
        res.status(200).json(listCategories);
    };

    // static getCategoryById = (req, res) => {
    //     const { id } = req.params;
    //     categories.findById(id,  (err, category) => {
    //         if (err) {
    //             res.status(404).send({ message: `${err.message} - Categoria não localizado!` });
    //         } else {
    //             res.status(200).json(category);
    //         }
    //     }); 
    // };

    static createCategory = async (req, res) => {
        const { nome } = validates.paramsNewCategory(req.body);
        const status = 'ATIVA';
        const newCategory = await CategoryService.createCategory({ nome: nome, status: status });
        res.status(201).send(newCategory.toJSON());
    };

    // static updateCategory = (req, res) => {
    //     const { id } = req.params;

    //     categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    //         if (!err) {
    //             res.status(200).send({ message: 'Categoria atualizado com sucesso!'});
    //         } else {
    //             res.status(500).send({ message: `${err.message} - falha ao atualizar categoria!` });
    //         };
    //     });
    // };

    // static deleteCategoryById = (req, res) => {
    //     const { id } = req.params;

    //     categories.findByIdAndDelete(id, (err) => {
    //         if (!err) {
    //             res.status(200).send({ message: 'Categoria removido com sucesso!'});
    //         } else {
    //             res.status(500).send({ message: `${err.message} - falha ao deletar categoria!` });
    //         };
    //     });
    // };
};

export default CategoryController;
