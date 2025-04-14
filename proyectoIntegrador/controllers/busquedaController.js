const controller = {
    resultado: (req, res) => {
        const query = req.query.search || '';
         res.render('resultados', { query });
    }
};

module.exports = controller;
