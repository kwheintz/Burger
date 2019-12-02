const Sequelize = require("sequelize");

const sequelize = require("connection.js");

const Burger = sequelize.define("burger", {
    devour: Sequelize.BOOLEAN,
    name: Sequelize.STRING
},{});

Burger.sync();

module.exports = Burger;