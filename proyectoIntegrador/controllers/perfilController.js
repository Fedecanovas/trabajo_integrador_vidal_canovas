const db = require('../db/models');

const controller = {
  mostrar: (req, res) => {
    if (req.session.usuarioLogueado == undefined) {
      return res.redirect('/login');
    }

    const idUsuario = req.session.usuarioLogueado.id;

    db.Usuario.findByPk(idUsuario, {
      include: ['productos'] 
    })
    .then(usuario => {
      res.render('perfil', {
        usuario: usuario,
        productos: usuario.productos
      });
    })
    .catch(error => {
      res.send("Error al cargar el perfil");
    });
  }
};

module.exports = controller;

