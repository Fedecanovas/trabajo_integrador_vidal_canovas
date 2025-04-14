const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.index);
router.get('/agregar', productosController.form);
router.get('/:id', productosController.showID);



module.exports = router;
