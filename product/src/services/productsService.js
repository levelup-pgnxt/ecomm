import products from '../models/Product.js';

class ProductService {

    static getAllProducts = async () => {
        return await products.find().populate('categoria', { _id: 0, nome: 1});
    };

    static getProductById = async (id) => {
        const category = await products.findById(id);
        return category;
    };

    static getProductByName = async (name) => {
        const category = await products.find({ nome: { $regex: name }});
        return category;
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

    static activateDeactivateProduct = async (id, newStatus) => {
        const result = await products.findByIdAndUpdate(id, { $set: { status: newStatus }});
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
