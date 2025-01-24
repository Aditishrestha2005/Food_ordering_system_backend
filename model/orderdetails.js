const { Sequelize, DataTypes } = require('sequelize');


const sequelize = require('../Database/db');

const OrderDetail = sequelize.define('OrderDetail', {
    Order_detail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Orders', 
            key: 'Order_ID'
        }
    },
    Menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Menus', 
            key: 'Menu_ID'
        }
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});
module.exports = OrderDetail;
