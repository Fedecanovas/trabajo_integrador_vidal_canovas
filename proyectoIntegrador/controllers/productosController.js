const db = require('../db/models');

const controller = {
  form: (req, res) => {
    if (!req.session.usuarioLogueado) {
      return res.redirect('/login');
    }
    return res.render('agregarProducto');
  },

  guardar: (req, res) => {
    if (!req.session.usuarioLogueado) {
      return res.redirect('/login');
    }
    const { nombre, descripcion, precio, imagen } = req.body;
    db.Producto.create({
      nombre,
      descripcion,
      precio,
      imagen,
      usuario_id: req.session.usuarioLogueado.id
    })
    .then(() => {
      return res.redirect('/');
    })
    .catch(error => {
      return res.send("Error al guardar el producto");
    });
  },

  detalle: (req, res) => {
  db.Producto.findByPk(req.params.id, {
    include: [
      {
        association: "comentarios",
        include: ["usuario"] 
      }
    ]
  })
  .then(producto => {
    if (!producto) return res.send("Producto no encontrado");

    res.render('detalleProducto', {
      producto: producto
    });
  })
  .catch(error => {
    res.send("Error al cargar el producto");
  });
}

};

module.exports = controller;

