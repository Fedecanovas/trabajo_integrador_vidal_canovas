const controller = {
    index: (req, res) => {
        res.render('productos'); 
    },
    showID: (req, res) => {
        let id = req.params.id;
        
         res.render('detalleProducto', { id }); 
    },
    form: (req, res) => {
         res.render('agregarProducto');
    }
};



module.exports = controller;
