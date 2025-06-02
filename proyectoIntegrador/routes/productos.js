const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');


router.get('/agregar', productosController.form);
router.post('/crear', productosController.guardar);
router.get('/:id', productosController.detalle);


module.exports = router;
