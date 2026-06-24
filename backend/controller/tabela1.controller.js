const Tabela1 = require('../models/Tabela1')

const cadastrar = async(req,res) =>{
    const valores = req.body
    try{
        await Tabela1.create(valores)
        console.log('valores criados')
        res.status(201).json({message: 'valores criados'})
    }catch(err){
        console.log('deu erro ai ze', err)
        res.status(500).json({message: 'nao foi possivel cadastrar os valores no banco de dados'})
    }
}

const consultarPorId = async(req,res)=>{
    const id = req.params.id
    try{
        const dados = await Tabela1.findByPk(id)
        if(!dados){
            console.log('id nao encontrado')
            res.status(404).json({message: 'id nao existente'})
        }else{
            console.log('épraterdadocertoaizé')
            res.status(200).json(dados)
        }
        
    }catch(err){
        console.log('deu erro ai ze', err)
        res.status(500).json({message: 'nao foi possivel consultar os valores do banco de dados'})
    }

}

const atualizar = async(req,res)=>{
    const valores = req.body
    const id = req.params.id
    let dados = await Tabela1.findByPk(id)
    try{
        if(!id){
            console.log('id inexistente')
            res.status(404).json({message: 'id nao encontrado'})
        }else{
            await Tabela1.update(valores,{where: {pkt1 : id}})
            dados = await Tabela1.findByPk(id)
            res.status(200).json({message: 'dados atualizados'})
        }
    }catch(err){
        console.log('deu erro ai ze', err)
        res.status(500).json({message: 'nao foi possivel atualizar os valores do banco de dados'})
    }
}

const excluir = async(req,res)=>{
    const id = req.params.id
    try{
        const dados = await Tabela1.findByPk(id)
        if(!dados){
            console.log('id inexistente')
            res.status(404).json({message: 'id nao encontrado'})
        }else{
            await Tabela1.destroy({where: { pkt1: id }})
            console.log('dados escluidos')
            res.status(200).json({message: 'dados excluidos'})
        }
    }catch(err){
        console.log('deu erro ai ze', err)
        res.status(500).json({message: 'nao foi possivel atualizar os valores do banco de dados'})
    }
}

module.exports = {cadastrar, consultarPorId, atualizar, excluir}