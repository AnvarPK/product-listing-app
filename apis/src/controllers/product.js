const { STATUS_CODES } = require('../appconsts');
const Product = require('../models/product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(STATUS_CODES.SUCESS).send(products);
    } catch (error) {
        console.log(error)
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send(error);
    }
}


const saveProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            categories: req.body.categories,
        });
        await product.save();

        res.status(STATUS_CODES.SUCESS).send(product);
    } catch (error) {
        console.log(error)
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send(error);
    }
}


module.exports = {
    getProducts,
    saveProduct
};