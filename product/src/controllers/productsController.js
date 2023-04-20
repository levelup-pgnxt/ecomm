/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import ProductService from '../services/productsService.js';
import validates from '../auxiliaries/utils.js';
import NotFoundError from '../errors/NotFoundError.js';

class ProductController {
  static getAllProducts = async (_req, res) => {
    const listProducts = await ProductService.getAllProducts();
    res.status(200).json(listProducts);
  };

  static getProductById = async (req, res) => {
    const { id } = req.params;
    validates.paramsID(id);

    const product = await ProductService.getProductById(id);
    if (!product) {
      res.status(404).send({ message: 'Produto não localizado!' });
    } else {
      res.status(200).json(product);
    }
  };

  static getProductByName = async (req, res) => {
    const { products } = req.query;
    const searchName = new RegExp(`${products}.*`, 'igm');
    const result = await ProductService.getProductByName(searchName);
    res.status(200).json(result);
  };

  static getProductsByValue = async (req, res) => {
    const { min, max } = validates.valuesMaxMin(req.query);
    if (Number(min) > Number(max)) {
      const message = 'Valor mínimo maior que valor máximo. Operação não permitida!';
      throw new NotFoundError(message);
    }
    const result = await ProductService.getProductsByValue(max, min);
    res.status(200).json(result);
  };

  static getProductsByStock = async (req, res) => {
    const { stock } = validates.valueStock(req.query);
    const result = await ProductService.getProductsByStock(stock);
    res.status(200).json(result);
  };

  static getProductsByCategoryId = async (req, res) => {
    const { id } = req.params;
    validates.paramsID(id);

    await validates.checkIsExistsCategoryById(id);

    const products = await ProductService.getProductsByCategoryId(id);
    res.status(200).json(products);
  };

  static createProduct = async (req, res) => {
    const keys = Object.keys(req.body);
    if (keys.length === 0) {
      const message = 'Objeto vazio, sem propriedades!';
      throw new NotFoundError(message);
    }

    const { nome, categoria } = validates.paramsProduct(req.body);
    await validates.checkIsExistsProduct(nome);
    validates.paramsID(categoria);
    await validates.checkIsExistsCategoryById(categoria);
    await validates.checkIsCategoryActive(categoria);

    const newProduct = await ProductService.createProduct(req.body);
    res.status(201).send(newProduct.toJSON());
  };

  static updateProduct = async (req, res) => {
    const { id } = req.params;

    validates.paramsID(id);

    const keys = Object.keys(req.body);
    if (keys.length === 0) {
      const message = 'Objeto vazio, sem propriedades!';
      throw new NotFoundError(message);
    }

    const dataProduct = validates.paramsUpdateProduct(req.body);
    const { nome, categoria } = dataProduct;

    if (nome) {
      validates.paramsID(categoria);
      await validates.checkIsExistsCategoryById(categoria);
      await validates.checkIsCategoryActive(categoria);
    }

    const updateProduct = await ProductService.updateProduct(id, dataProduct);
    if (!updateProduct) {
      res.status(404).send({ message: 'Produto não localizado!' });
    } else {
      res.status(204).send(updateProduct.toJSON());
    }
  };

  static deleteProductById = async (req, res) => {
    const { id } = req.params;
    validates.paramsID(id);

    const deleteProduct = await ProductService.deleteProductById(id);
    if (!deleteProduct) {
      res.status(404).send({ message: 'Categoria não localizada!' });
    } else {
      res.status(204).send();
    }
  };
}

export default ProductController;
