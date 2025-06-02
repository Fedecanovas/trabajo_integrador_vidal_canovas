const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController');

router.post('/agregar', comentariosController.agregar);

module.exports = router;
