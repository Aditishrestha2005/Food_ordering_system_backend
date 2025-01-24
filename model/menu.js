const { Sequelize, DataTypes } = require('sequelize');


const sequelize = require('../Database/db');

const Menu = sequelize.define('Menu', {
    Menu_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Restaurants', 
            key: 'Restaurant_ID'
        }
    },
    Item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Availability_Status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});
module.exports = Menu;
