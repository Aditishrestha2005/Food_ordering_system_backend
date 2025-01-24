const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db')

const User = sequelize.define('User', {
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Phone_Number: {
        type: DataTypes.STRING
    },
    Address: {
        type: DataTypes.STRING
    }
});

module.exports = User;