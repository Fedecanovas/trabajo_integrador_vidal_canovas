const modulo = require('../db/modulo');
const productosController = {
    index: (req, res) => {
        const productos = modulo.productos.lista;
        res.render('productos', { productos });
    },

    showID: (req, res) => {
        const id = req.params.id;
        const producto = modulo.productos.lista[id];
        const comentarios = modulo.comentarios; 

        if (producto === undefined) {
            res.render('error', {
                message: "Producto no encontrado",
                error: {}
            });
        } else {
            res.render('detalleProducto', {
                producto: producto,
                comentarios: comentarios
            });
        }
    },

    form: (req, res) => {
        res.render('agregarProductos');
    }
};

module.exports = productosController;
