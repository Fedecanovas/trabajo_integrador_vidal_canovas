module.exports = function (sequelize, dataTypes) {
  let alias = "Comentario";

  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER
    },
    contenido: {
      type: dataTypes.TEXT
    },
    fecha: {
      type: dataTypes.DATE
    },
    usuario_id: {
      type: dataTypes.INTEGER
    },
    producto_id: {
      type: dataTypes.INTEGER
    }
  };

  let config = {
    tableName: "comentarios",
    timestamps: false
  };

  const Comentario = sequelize.define(alias, cols, config);

  Comentario.associate = function (models) {
    Comentario.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "usuario_id"
    });

    Comentario.belongsTo(models.Producto, {
      as: "producto",
      foreignKey: "producto_id"
    });
  };

  return Comentario;
};
