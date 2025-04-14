const busquedaController = {
    resultado: (req, res) => {
        let busco = req.query.search;
        res.render('resultados', { search: busco });
    }
};

module.exports = busquedaController;
