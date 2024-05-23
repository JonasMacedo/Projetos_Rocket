const express = require('express')
const rotas = express.Router();

let cursosInfo = [
    {'curso':'react', 'info':'Curso de React'},
    {'curso':'node', 'info':'Curso de NodeJS'},
    {'curso':'css', 'info':'Curso de CSS'},
    {'curso':'python', 'info':'Curso de Python'}
]

rotas.get('/',(req,res)=>{
    res.json({ola:'Seja bem vindo'})
})

rotas.get('/:cursoId',(req,res)=>{
    
    const curso = req.params.cursoId // obtendo parametro da URL.
    const infCurso = cursosInfo.find(i=>i.curso == curso)

    if(!infCurso){
        res.status(404).json({erro:'Curso não encontrado', cursoPesquisado: curso})
    }else{
        res.status(200).json({infCurso})
    }
})

module.exports = rotas