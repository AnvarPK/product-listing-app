const { Router } = require('express');
const { getCategories, saveCategory } = require('../controllers/category');
const router = Router();

router.get('/categories', getCategories);

router.post('/category', saveCategory);

module.exports = router;