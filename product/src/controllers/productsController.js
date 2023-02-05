import ProductService from '../services/productsService.js';
import CategoryService from '../services/categoriesService.js';
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
            const product = await ProductService.getProductById(id);
            if (!product) {
                res.status(404).send({ message: 'Produto não localizado!' });
            } else {
                res.status(200).json(product);
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
            res.status(404).send({ message: 'Produto não localizado!' });
        } else {
            res.status(200).json(result);
        };
    };

    static getProductsByValue = async (req, res) => {
        const { min, max } = validates.valuesMaxMin(req.query);
        if (Number(min) > Number(max)) {
            const message = 'Valor mínimo maior que valor máximo. Operação não permitida!';
            throw new NotFoundError(message);
        }
        const result = await ProductService.getProductsByValue(max, min);
        if (!result) {
            res.status(404).send({ message: 'Produtos não localizados!' });
        } else {
            res.status(200).json(result);
        };
    };

    static getProductsByStock = async (req, res) => {
        const { stock } = validates.valueStock(req.query);
        const result = await ProductService.getProductsByStock(stock);
        if (!result) {
            res.status(404).send({ message: 'Produtos não localizados!' });
        } else {
            res.status(200).json(result);
        };
    };

    static getProductsByCategoryId = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (isValideID) {
            const isExistCategory = await CategoryService.checkIsExistsCategoryById(id);
            if (isExistCategory) {
                const products = await ProductService.getProductsByCategoryId(id);
                if (!products) {
                    res.status(404).send({ message: 'Produtos não localizados!' });
                } else {
                    res.status(200).json(products);
                };
            }
            res.status(404).send({ message: 'Categoria não localizada!' });
        } else {
            res.status(400).send({ message: 'ID inválido!' });
        }
    };

    static createProduct = async (req, res) => {
        const { nome, categoria } = validates.paramsProduct(req.body);
        const isExist = await ProductService.checkIsExistsProduct(nome);
        if (isExist) {
            const message = 'Produto já cadastrado!';
            throw new NotFoundError(message);
        };
        const isValideIdCategory = validates.paramsID(categoria);
        if (!isValideIdCategory) return res.status(400).send({ message: 'ID inválido!' });

        const isExistCategory = await CategoryService.checkIsExistsCategoryById(categoria);
        if (!isExistCategory) return res.status(400).send({ message: 'Categoria não localizada!' });

        const isActiveCategory = await CategoryService.checkIsCategoryActive(categoria);
        if (!isActiveCategory) return res.status(400).send({ message: 'Categoria Inativa!' });

        const newProduct = await ProductService.createProduct(req.body);
        res.status(201).send(newProduct.toJSON());
    };

    static updateProduct = async (req, res) => {
        const { id } = req.params;
        const isValideID = validates.paramsID(id);

        if (!isValideID) return res.status(400).send({ message: 'ID inválido!' });

        const dataProduct = validates.paramsProduct(req.body);
        const { categoria } = dataProduct;

        const isValideIdCategory = validates.paramsID(categoria);
        if (!isValideIdCategory) return res.status(400).send({ message: 'ID inválido!' });

        const isExistCategory = await CategoryService.checkIsExistsCategoryById(categoria);
        if (!isExistCategory) return res.status(400).send({ message: 'Categoria não localizada!' });

        const isActiveCategory = await CategoryService.checkIsCategoryActive(categoria);
        if (!isActiveCategory) return res.status(400).send({ message: 'Categoria Inativa!' });

        const updateProduct = await ProductService.updateProduct(id, dataProduct);
        if (!updateProduct) {
            return res.status(404).send({ message: 'Produto não localizado!' });    
        }
        res.status(201).send(updateProduct.toJSON());
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
