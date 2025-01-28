const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const product = sequelize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    productImage: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});
module.exports = product;
