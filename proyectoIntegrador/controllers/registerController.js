const db = require('../db/models');
const bcrypt = require('bcryptjs');

const controller = {
  show: (req, res) => {
    res.render('register');
  },

  guardar: (req, res) => {
    const { email, usuario, contrasenia, nacimiento, dni, foto } = req.body;
    db.Usuario.findOne({ where: { email } })
      .then(usuarioExistente => {
        if (usuarioExistente) {
          return res.send("Este email ya está registrado");
        }
    const hash = bcrypt.hashSync(contrasenia, 10);
    return db.Usuario.create({
        email,
        usuario,
        contrasenia: hash,
        nacimiento,
        dni,
        foto
        });
      })
      .then(() => {
        return res.redirect('/login');
      })
      .catch(error => {
        return res.send("Error al registrar el usuario");
      });
  }
};

module.exports = controller;


