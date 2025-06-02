const db = require('../db/models');
const op = db.Sequelize.Op; 

const controller = {
  resultado: (req, res) => {
    let keyword = req.query.search;

    db.Producto.findAll({
      where: {
        nombre: {
          [op.like]: `%${keyword}%`
        }
      }
    })
    .then(productos => {
      return res.render('resultados', {
        productos: productos,
        keyword: keyword
      });
    })
    .catch(error => {
      return res.send("Error al procesar la búsqueda");
    });
  }
};

module.exports = controller;
