const controller = {
  salir: (req, res) => {
    res.clearCookie('user');
    req.session.destroy();
    return res.redirect('/login');
  }
};

module.exports = controller;
