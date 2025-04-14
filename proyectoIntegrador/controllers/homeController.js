const modulo = require('../db/modulo');
const controlador = {
    index: (req, res) => {
        const productos = modulo.productos.lista;
        res.render('index', { productos });
    }
};

module.exports = controlador;


