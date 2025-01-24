const { Sequelize, DataTypes } = require('sequelize');


const sequelize = require('../Database/db');

const Order = sequelize.define('Order', {
    Order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Customers', 
            key: 'Customer_ID'
        }
    },
    Restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Restaurants', 
            key: 'Restaurant_ID'
        }
    },
    Order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Order_status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Order;
