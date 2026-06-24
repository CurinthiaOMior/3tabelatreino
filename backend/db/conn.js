const Sequelize = require('sequelize')
const db = new Sequelize('3tabela', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})
module.exports = db