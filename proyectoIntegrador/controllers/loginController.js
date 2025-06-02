const db = require('../db/models');
const bcrypt = require('bcryptjs');

const controller = {
  show: (req, res) => {
    if (req.session.usuarioLogueado != undefined) {
      return res.redirect('/perfil');
    } else {
      return res.render('login');
    }
  },

  login: (req, res) => {
    const { usuario, contrasenia, recordarme } = req.body;

    db.Usuario.findOne({ where: { usuario } })
      .then(usuarioEncontrado => {
        if (!usuarioEncontrado) {
          return res.send("Usuario no encontrado");
        }

        const okPassword = bcrypt.compareSync(contrasenia, usuarioEncontrado.contrasenia);

        if (!okPassword) {
          return res.send("Contraseña incorrecta");
        }

        req.session.usuarioLogueado = {
          id: usuarioEncontrado.id,
          usuario: usuarioEncontrado.usuario,
          email: usuarioEncontrado.email
        };

        if (recordarme) {
          res.cookie('user', usuarioEncontrado.usuario, { maxAge: 1000 * 60 * 5 });
        }

        return res.redirect('/perfil');
      })
      .catch(error => {
        return res.send("Error al iniciar sesión");
      });
  }
};

module.exports = controller;