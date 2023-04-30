const express = require('express');
const { addProduct, getProduct, updateProduct, removeProduct } = require('./controller');
const router = express.Router();


router.post('/add', addProduct);
router.get('/get', getProduct);
router.put('/update', updateProduct);
router.delete('/remove', removeProduct)


module.exports = router;