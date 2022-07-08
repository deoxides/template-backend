"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const db_1 = require("../db");
const products_1 = require("./products");
exports.Usuario = db_1.sequelize.define('usuario', {
    rut: {
        type: db_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: db_1.DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: db_1.DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: db_1.DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: db_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    clave: {
        type: db_1.DataTypes.STRING,
        allowNull: false,
    },
    celular: {
        type: db_1.DataTypes.BIGINT,
        allowNull: false,
    },
    direccion: {
        type: db_1.DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: db_1.DataTypes.STRING,
        allowNull: true,
        defaultValue: 'cliente'
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.Usuario.hasOne(products_1.Carrito, {
    foreignKey: 'usuario',
    as: 'usuario_fk'
});
products_1.Carrito.belongsTo(exports.Usuario, {
    foreignKey: 'usuario',
    as: 'carrito_fk'
});
//# sourceMappingURL=user.js.map