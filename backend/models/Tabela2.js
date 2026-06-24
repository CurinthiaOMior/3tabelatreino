const DataTypes = require('sequelize')
const db = require('../db/conn')
const Tabela2 = db.define('tabela2',{
    pkt2:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantidade:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'tabela2s'
})
module.exports = Tabela2