const { Sequelize, DataTypes } = require('sequelize');


const sequelize = require('../Database/db');


const Resturant = sequelize.define('Resturant',{
    Resturant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Contact_Number: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Resturant;