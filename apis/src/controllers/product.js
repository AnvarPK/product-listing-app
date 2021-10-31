const { STATUS_CODES } = require('../appconsts');
const Product = require('../models/product');

const getCategories = async (req, res) => {
    try {
        const cateogories = await Product.find({});
        res.status(STATUS_CODES.SUCESS).send(cateogories);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
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
        res.status(500).send(error);
    }
}


module.exports = {
    getCategories,
    saveProduct
};