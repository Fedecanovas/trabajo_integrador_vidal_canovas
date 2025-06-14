var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const perfilRouter = require('./routes/perfil');
const productosRouter = require('./routes/productos');
const busquedaRouter = require('./routes/busqueda');
const logoutRouter = require('./routes/logout');
const comentariosRouter = require('./routes/comentarios');


var app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/perfil', perfilRouter);
app.use('/productos', productosRouter);
app.use('/resultados', busquedaRouter);
app.use('/users', usersRouter);
app.use('/logout', logoutRouter);
app.use('/comentarios', comentariosRouter);

app.use(session({
  secret: 'clave',
  resave: false,
  saveUninitialized: true
}));


app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
