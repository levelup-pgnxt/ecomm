import ProductService from '../services/productsService.js';
import validates from '../services/utils.js';
import NotFoundError from '../errors/NotFoundError.js';

class ProductController {

    static getAllProducts = async (_req, res) => {
        const listProducts = await ProductService.getAllProducts();
        res.status(200).json(listProducts);
    };

    static getProductById = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const category = await ProductService.getProductById(id);
            if (!category) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(200).json(category);
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static getProductByName = async (req, res) => {
        const { products } = req.query;
        const searchName = new RegExp(`${products}.*`, 'igm');
        const result = await ProductService.getProductByName(searchName);
        if (!result) {
            res.status(404).send({ message: 'Categoria não localizada!' });
        } else {
            res.status(200).json(result);
        };
    };

    static createProduct = async (req, res) => {
        const { nome } = validates.paramsProduct(req.body);
        const isExist = await ProductService.checkIsExistsProduct(nome);
        if (isExist) {
            const message = 'Categoria já cadastrada!';
            throw new NotFoundError(message);
        } else {
            const status = 'ATIVA';
            const newProduct = await ProductService.createProduct({ nome: nome, status: status });
            res.status(201).send(newProduct.toJSON());
        }
    };

    static updateProduct = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const { nome } = validates.paramsProduct(req.body);
            const updateProduct = await ProductService.updateProduct(id, nome);
            if (!updateProduct) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(201).send({ message: 'Categoria atualizada!' });
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static activateDeactivateProduct = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const dados = await ProductService.getProductById(id);
            if (!dados) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                let { status } = dados;
                status === 'ATIVA' ? status = 'INATIVA' : status = 'ATIVA';
                await ProductService.activateDeactivateProduct(id, status);
                res.status(201).send({ message: `Status atualizado para "${status}"!` });
            }
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static deleteProductById = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const deleteProduct = await ProductService.deleteProductById(id);
            if (!deleteProduct) {
                res.status(404).send({ message: 'Categoria não localizada!' });
            } else {
                res.status(204);
            };
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };
};

export default ProductController;
