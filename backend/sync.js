const conn = require('./db/conn')
const {Tabela1, Tabela2, TabelaRelacao} = require('./models/rell')

async function syncDb(){
    try{
        await conn.sync({force:true})
        console.log('tabelas sincronizadas')
    }catch(err){
        console.log('tabelas nao sincronizadas')
    }finally{
        await conn.close()
        console.log('fechando conexão com o banco')
    }
}

syncDb()