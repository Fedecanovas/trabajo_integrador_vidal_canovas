module.exports = function (sequelize, dataTypes) {
let alias = "Usuario";

let cols = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: dataTypes.INTEGER
  },
  usuario: {
    type: dataTypes.STRING
  },
  email: {
    type: dataTypes.STRING
  },
  contrasenia: {
    type: dataTypes.STRING
  },
  nacimiento: {
    type: dataTypes.DATE
  },
  dni: {
    type: dataTypes.INTEGER
  },
  foto: {
    type: dataTypes.STRING
  }
};
const Usuario = sequelize.define(alias, cols, config);

Usuario.associate = function (models) {
  Usuario.hasMany(models.Producto, {
    as: "productos",
    foreignKey: "usuario_id"
});

Usuario.hasMany(models.Comentario, {
  as: "comentarios",
  foreignKey: "usuario_id"
});
};
  return Usuario;
};

module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    nombre: {
      type: dataTypes.STRING
    },
    precio: {
      type: dataTypes.DECIMAL
    },
    imagen: {
      type: dataTypes.STRING
    },
    usuario_id: {
      type: dataTypes.INTEGER
    }
  };

  let config = {
    tableName: "productos",
    timestamps: false
  };

  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "usuario_id"
    });

    Producto.hasMany(models.Comentario, {
      as: "comentarios",
      foreignKey: "producto_id"
    });
  };

  return Producto;
};