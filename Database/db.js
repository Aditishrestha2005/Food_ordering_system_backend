const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Food_Ordering_System_db", "postgres", "admin123", {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false,
});

async function Food_Ordering_System_dbConnection() {
    try {
        await sequelize.authenticate();
        console.log('DB connection successful.....................');
    } catch (error) {
        console.error('DB connection failed:', error);
    }
}

Food_Ordering_System_dbConnection();

module.exports = sequelize;