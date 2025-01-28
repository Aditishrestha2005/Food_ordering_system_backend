const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db')

const User = sequelize.define('Users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    phone_number: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    }
});

module.exports = User;