const express = require('express')
const alunos = require('./controladores/alunos')


const rotas = express()

rotas.get('/alunos', alunos.listaDeAlunos)
rotas.get('/alunos/:id', alunos.obterAluno)
rotas.post('/alunos', alunos.cadastrarUmAluno)
rotas.delete('/alunos/:id', alunos.excluirAluno)


module.exports = rotas