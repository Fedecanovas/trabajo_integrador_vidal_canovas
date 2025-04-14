const modulo = require('../db/modulo');

const perfilController = {
    mostrar: (req, res) => {
        const usuario = modulo.usuario;
        res.render('perfil', { usuario });
    }
};

module.exports = perfilController;
