var Sequelize = require("sequelize");

var sequelize = new Sequelize("burger_db", "root", "Mysqlpassword")
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 1,
        idle: 10000
    }
});

module.exports = sequelize;