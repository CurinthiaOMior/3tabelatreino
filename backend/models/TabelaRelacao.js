const DataTypes = require('sequelize')
const db = require('../db/conn')
const TabelaRelacao = db.define('tabelarelacao',{
    type:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pkt1:{
            type: DataTypes.INTEGER,
            references:{
                model: 'tabela1s',
                key: 'pkt1'
            }
    },
    pkt2:{
            type: DataTypes.INTEGER,
            references:{
                model: 'tabela2s',
                key: 'pkt2'
            }
    },
    tipo:{
        type: DataTypes.ENUM('ENTRADA','SAIDA'),
        allowNull: false
    },
    qtdeMov:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'tabelarelacaos'
})
module.exports = TabelaRelacao