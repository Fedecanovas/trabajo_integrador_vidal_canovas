const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Listado
router.get('/', productosController.index);

// Detalle
router.get('/:id', productosController.showID);

// Formulario de agregar
router.get('/agregar', productosController.form);

module.exports = router;
