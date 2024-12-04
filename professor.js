const con = require('../connect/connect');

const create = (req, res) => {
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;


let query = 'INSERT INTO professor (nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES'
query += `('${nome}', '${cpf}', '${email}', '${endereco}', '${data_nascimento}', '${data_cadastro}')`;


con.query(query, (err, result)=> {
    if(err){
        res.status(500).json(err)
    }else{
        res.status(201).json(result)
    }
})

}

const read = (req, res) => {
    con.query('SELECT * FROM professor', (err, result) => {
        if(err) {
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const update = (req, res) => {
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;


    let query = `UPDATE professor SET nome = '${nome}', cpf = '${cpf}', email = '${email}', endereco = '${endereco}', data_nascimento = '${data_nascimento}', data_cadastro = '${data_cadastro}'`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id);
    const query = `DELETE FROM professor WHERE professor_id = ?`
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(204).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}