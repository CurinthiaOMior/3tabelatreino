const DataTypes = require('sequelize')
const db = require('../db/conn')
const Tabela1 = db.define('tabela1',{
    pkt1:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    valor:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'tabela1s'
})
module.exports = Tabela1