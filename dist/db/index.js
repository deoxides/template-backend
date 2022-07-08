"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypes = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
Object.defineProperty(exports, "DataTypes", { enumerable: true, get: function () { return sequelize_1.DataTypes; } });
// const db = new Client({
//     host:process.env.DB_HOST,
//     password:process.env.DB_PASSWORD,
//     port:Number(process.env.DB_PORT) || 5432
// })
exports.sequelize = new sequelize_1.Sequelize({
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
    ssl: true,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false
        }
    },
    logging: false
});
// export default db;
//# sourceMappingURL=index.js.map