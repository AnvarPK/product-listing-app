const { STATUS_CODES } = require('../appconsts');
const Category = require('../models/category');

const getCategories = async (req, res) => {
    try {
        const cateogories = await Category.find({});
        res.status(STATUS_CODES.SUCESS).send(cateogories);
    } catch (error) {
        console.log(error)
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send(error);
    }
}

const saveCategory = async (req, res) => {
    console.log(req)
    try {
        const category = new Category({
            name: req.body.name,
            parent: req.body.parent,
        });
        await category.save();

        res.status(STATUS_CODES.SUCESS).send(category);
    } catch (error) {
        console.log(error)
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).send(error);
    }
}

module.exports = {
    getCategories,
    saveCategory
};