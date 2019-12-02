const Sequelize = require("sequelize");

const sequelize = require("connection.js");

const Burger = sequelize.define("burger", {
    devour: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    name: Sequelize.STRING
},{});

Burger.sync();

module.exports = Burger;