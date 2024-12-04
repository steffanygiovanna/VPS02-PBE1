const express = require('express')
const routes = express.Router()

const clientes = require('./controllers/clientes')
const professor = require('./controllers/professor')
const telefone = require('./controllers/telefone')
const veiculos = require('./controllers/veiculos')

routes.post('/clientes', clientes.create)
routes.get('/clientes', clientes.read)
routes.put('/clientes/:id', clientes.update)
routes.delete('/clientes/:id', clientes.deletar)

routes.post('/professor', professor.create)
routes.get('/professor', professor.read)
routes.put('/professor/:id', professor.update)
routes.delete('/professor/:id', professor.deletar)

routes.post('/telefone', telefone.create)
routes.get('/telefone', telefone.read)
routes.put('/telefone/:id', telefone.update)
routes.delete('/telefone/:id', telefone.deletar)

routes.post('/veiculos', veiculos.create)
routes.get('/veiculos', veiculos.read)
routes.put('/veiculos/:id', veiculos.update)
routes.delete('/veiculos/:id', veiculos.deletar)

module.exports = routes;