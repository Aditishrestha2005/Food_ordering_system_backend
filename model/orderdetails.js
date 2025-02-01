const { Sequelize, DataTypes } = require('sequelize');


const sequelize = require('../Database/db');

const orderdetail = sequelize.define('OrderDetails', {
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
    Product_id: {
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
    Price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});
module.exports = OrderDetail;
