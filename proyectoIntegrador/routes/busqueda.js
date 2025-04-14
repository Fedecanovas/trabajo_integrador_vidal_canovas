const express = require('express');
const router = express.Router();
const busquedaController = require('../controllers/busquedaController');

router.get('/', busquedaController.resultado);

module.exports = router;

