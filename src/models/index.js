const dbConfig = require("../config/database.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.categories = require("./category.model")(sequelize, Sequelize);
db.trademarks = require("./trademark.model")(sequelize, Sequelize);
db.products = require("./product.model")(sequelize, Sequelize);
module.exports = db;