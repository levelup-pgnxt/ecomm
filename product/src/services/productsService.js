import products from '../models/Product.js';

class ProductService {

    static getAllProducts = async () => {
        return await products.find().populate('categoria', { _id: 0, nome: 1});
    };

    static getProductById = async (id) => {
        const product = await products.findById(id)
            .populate('categoria', { _id: 0, nome: 1});
        return product;
    };

    static getProductByName = async (name) => {
        const result = await products.find({ nome: { $regex: name }})
            .populate('categoria', { _id: 0, nome: 1});
        return result;
    };

    static getProductsByCategoryId = async (id) => {
        const result = await products.find({ categoria: { $eq: id }})
            .populate('categoria', { _id: 0, nome: 1});
        return result;
    };

    static getProductsByValue = async (max, min) => {
        const result = await products.find({ $and: [
            { precoUnitario: { $gte: Number(min) }},
            { precoUnitario: { $lte: Number(max) }}
        ]}).populate('categoria', { _id: 0, nome: 1});
        return result;
    };

    static createProduct = async (data) => {
        const newProduct = new products(data);
        await newProduct.save();
        return newProduct;
    };

    static updateProduct = async (id, nome) => {
        const result = await products.findByIdAndUpdate(id, { $set: { nome: nome } });
        return result;
    };

    static deleteProductById = async (id) => {
        const result = await products.findByIdAndDelete(id);
        return result;
    };

    static checkIsExistsProduct = async (name) => {
        const exist = await products.findOne({ nome: name });
        return !!exist;
    };

};

export default ProductService;
