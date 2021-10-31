const { Router } = require('express');
const { getCategories } = require('../controllers/category');
const router = Router();

router.get('/categories', getCategories);

module.exports = router;