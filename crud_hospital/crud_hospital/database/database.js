const Sequelize = require('sequelize');

const connection = new Sequelize(
    'db_hospital',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;
