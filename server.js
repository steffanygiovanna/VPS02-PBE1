const express = require('express');
const app = express();

const clientes = require('./src/controllers/clientes');
const professor = require('./src/controllers/professor');
const telefone = require('./src/controllers/telefone');
const veiculos = require('./src/controllers/veiculos');

app.use(express.json());

app.post('/clientes', clientes.create);
app.get('/clientes', clientes.read);
app.put('/clientes/:id', clientes.update);
app.delete('/clientes/:id', clientes.deletar);

app.post('/professor', professor.create);
app.get('/professor', professor.read);
app.put('/professor/:id', professor.update);
app.delete('/professor/:id', professor.deletar);

app.post('/telefone', telefone.create);
app.get('/telefone', telefone.read);
app.put('/telefone/:id', telefone.update);
app.delete('/telefone/:id', telefone.deletar);

app.post('/veiculos', veiculos.create);
app.get('/veiculos', veiculos.read);
app.put('/veiculos/:id', veiculos.update);
app.delete('/veiculos/:id', veiculos.deletar);

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});