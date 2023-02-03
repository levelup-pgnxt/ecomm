import categories from '../models/Category.js';

class CategoryService {

    static getAllCategories = async () => {
        const listCategories = await categories.find();
        return listCategories;
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

    static createCategory = async (data) => {
        const newCategory = new categories(data);
        await newCategory.save();
        return newCategory;
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

export default CategoryService;
