const Tabela1 = require('./Tabela1')
const Tabela2 = require('./Tabela2')
const TabelaRelacao = require('./TabelaRelacao')

Tabela1.hasMany(TabelaRelacao,{
    foreignKey: 'pkt1',
    as: 'tabelarelacaoTabela1',
    onDelete: 'CASCADE'
})
TabelaRelacao.belongsTo(Tabela1,{
    foreignKey: 'pkt1',
    as: 'tabela1Tabelarelacao',
    allowNull: false
})
Tabela2.hasMany(TabelaRelacao,{
    foreignKey: 'pkt2',
    as: 'tabelarelacaoTabela2',
    onDelete: 'CASCADE'
})
TabelaRelacao.belongsTo(Tabela2,{
    foreignKey: 'pkt2',
    as: 'tabela2Tabelarelacao',
    allowNull: false
})
module.exports = {Tabela1, Tabela2, TabelaRelacao}
