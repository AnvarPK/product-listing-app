const Category = require('../models/category');

const getCategories = async (req, res) => {
    try {
        const cateogories = await Category.find({});
        res.send(cateogories);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

module.exports = {
    getCategories
};