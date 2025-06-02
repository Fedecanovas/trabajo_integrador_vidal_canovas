
const db = require('../db/models');

const controller = {
  index: (req, res) => {
    db.Producto.findAll()
      .then(productos => {
        res.render('index', {
          productos: productos
        });
      })
      .catch(error => {
        res.send("Error al cargar productos");
      });
  }
};

module.exports = controller;