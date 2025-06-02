const db = require('../db/models');

const controller = {
  agregar: (req, res) => {
    if (!req.session.usuarioLogueado) {
      return res.redirect('/login');
    }

    const { contenido, producto_id } = req.body;

    db.Comentario.create({
      contenido: contenido,
      fecha: new Date(),
      usuario_id: req.session.usuarioLogueado.id,
      producto_id: producto_id
    })
    .then(() => res.redirect('/productos/' + producto_id))
    .catch(error => res.send("Error al guardar el comentario"));
  }
};

module.exports = controller;
