const { Router } = require('express');
const { saveProduct, getProducts } = require('../controllers/product');
const router = Router();

router.get('/products', getProducts);

router.post('/product', saveProduct);

module.exports = router;