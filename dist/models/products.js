"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pago = exports.Orden = exports.Inventario = exports.Carrito_Poleron = exports.Carrito = exports.Poleron = void 0;
const db_1 = require("../db");
exports.Poleron = db_1.sequelize.define('poleron', {
    id: {
        type: db_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    color: {
        type: db_1.DataTypes.CHAR,
        allowNull: false
    },
    img: {
        type: db_1.DataTypes.BLOB,
        allowNull: false
    },
    talla: {
        type: db_1.DataTypes.STRING,
        allowNull: false
    },
    disenio: {
        type: db_1.DataTypes.CHAR,
        allowNull: false
    },
    precio: {
        type: db_1.DataTypes.BIGINT,
        allowNull: false
    },
    oferta: {
        type: db_1.DataTypes.BIGINT,
        allowNull: true,
        defaultValue: 0
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.Carrito = db_1.sequelize.define('carrito_compra', {
    id: {
        type: db_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total: {
        type: db_1.DataTypes.BIGINT,
        allowNull: false
    },
    pagado: {
        type: db_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.Carrito_Poleron = db_1.sequelize.define('carrito_producto', {
    id: {
        type: db_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_carrito: {
        type: db_1.DataTypes.INTEGER,
        references: {
            model: exports.Carrito,
            key: 'id'
        }
    },
    id_poleron: {
        type: db_1.DataTypes.INTEGER,
        references: {
            model: exports.Poleron,
            key: 'id'
        }
    },
    cantidad: {
        type: db_1.DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.Carrito.belongsToMany(exports.Poleron, {
    through: exports.Carrito_Poleron,
    foreignKey: 'id_carrito',
    onDelete: 'CASCADE'
});
exports.Poleron.belongsToMany(exports.Carrito, {
    through: exports.Carrito_Poleron,
    foreignKey: 'id_poleron',
    onDelete: 'CASCADE'
});
exports.Inventario = db_1.sequelize.define('inventario', {
    id_inventario: {
        type: db_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_poleron: {
        type: db_1.DataTypes.INTEGER,
        references: {
            model: exports.Poleron,
            key: 'id'
        }
    },
    cantidad: {
        type: db_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.Poleron.hasOne(exports.Inventario, {
    foreignKey: 'id_poleron'
});
exports.Inventario.belongsTo(exports.Poleron, {
    foreignKey: 'id_poleron'
});
exports.Orden = db_1.sequelize.define('ordenes', {
    id: {
        type: db_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_carrito: {
        type: db_1.DataTypes.INTEGER,
        references: {
            model: exports.Carrito,
            key: 'id'
        }
    },
    region: {
        type: db_1.DataTypes.STRING,
        allowNull: false
    },
    comuna: {
        type: db_1.DataTypes.STRING,
        allowNull: false
    },
    calle: {
        type: db_1.DataTypes.STRING
    },
    costo_envio: {
        type: db_1.DataTypes.BIGINT
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.Orden.belongsTo(exports.Carrito, {
    foreignKey: 'id'
});
exports.Carrito.hasOne(exports.Orden, {
    foreignKey: 'id_carrito'
});
exports.Pago = db_1.sequelize.define('pago', {
    id: {
        type: db_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    orden_compra: {
        type: db_1.DataTypes.STRING,
        allowNull: false
    },
    metodo_pago: {
        type: db_1.DataTypes.CHAR,
        allowNull: false
    },
    id_carrito: {
        type: db_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: exports.Carrito,
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});
exports.Carrito.hasOne(exports.Pago, {
    foreignKey: 'id'
});
exports.Pago.belongsTo(exports.Carrito, {
    foreignKey: 'id_carrito'
});
//# sourceMappingURL=products.js.map