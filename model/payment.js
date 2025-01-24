const { Sequelize, DataTypes } = require('sequelize');


const sequelize = require('../Database/db');



const Payment = sequelize.define('Payment', {
    Payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Orders',
            key: 'Order_id'
        }
    },
    Payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Payment_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports= Payment;