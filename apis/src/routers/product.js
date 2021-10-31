const { Router } = require('express');
const { saveProduct } = require('../controllers/product');
const router = Router();

router.get('/products', (req, res) => {
    res.send('products');
});

router.post('/product', saveProduct);

module.exports = router;