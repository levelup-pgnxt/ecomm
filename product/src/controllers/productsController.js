import products from "../models/Product.js";

class ProductController {

    static listProducts = (req, res) => {
        products.find((err, products) => {
            res.status(200).json(products);
        })
    };
};


export default ProductController;