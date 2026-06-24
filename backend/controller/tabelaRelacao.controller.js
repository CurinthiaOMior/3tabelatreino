const TabelaRelacao = require('../models/TabelaRelacao')
const Tabela1 = require('../models/Tabela1')
const Tabela2 = require('../models/Tabela2')
const cadastrar = async(req,res)=>{
    const valores = req.body

    try{
        const tabela1 = await Tabela1.findByPk(valores.pkt1)
        if(!tabela1){
            console.log('valores na tabela inexistentes')
            return res.status(404).json({message: 'valores inexistentes na tabela'})
        }
        const tabela2 = await Tabela2.findByPk(valores.pkt2)
        if(!tabela2){
            console.log('valores na tabela inexistentes')
            return res.status(404).json({message: 'valores inexistentes na tabela'})
        }

       if(valores.tipo === 'ENTRADA'){
        tabela2.quantidade += valores.qtdeMov
       }else if(valores.tipo === 'SAIDA'){
        if(tabela2.quantidade < valores.qtdeMov){
            return res.status(400).json({ message: 'quantidade insuficiente' })
        }else{
            tabela2.quantidade -= valores.qtdeMov
        }
       }else{
        return res.status(400).json({ message: "Tipo de Movimentação Inválida!" })
       }

       await tabela2.save()

       const Trelacao = await TabelaRelacao.create(valores)
       res.status(200).json(Trelacao)
    }catch(err){
        console.error('Erro ao registra o Movimento',err)
        res.status(500).json({message: "Erro ao registra o Movimento"})
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await TabelaRelacao.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Não foi possível listar a movimentação!',err)
        res.status(500).json({message: 'Não foi possível listar a movimentação!'})
    }
}
module.exports = {cadastrar, listar}