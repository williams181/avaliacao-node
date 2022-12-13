const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/usuario/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from usuario where id=' + req.params.id, res);
})

app.get('/usuarios', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from usuario', res);
})

app.post('/usuario/login', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("select * from usuario where email='" + req.params.email + "' and senha='" + req.params.senha + "'", res);
})

app.post('/usuario/cadastro', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into usuario (nome, email, senha) values('" + req.body.nome + "','" + req.body.email + "','" + req.body.senha + "')", res);
})

app.put('/usuario/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update usuario set nome='" + req.body.nome + "'," + "email='" + req.body.email + "'," + "senha='" + req.body.senha + "'" + "where id=" + req.params.id + ";", res);
})

app.delete('/usuario/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from usuario where id=" + req.params.id, res);
})

app.get('/produto/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from produto where id=' + req.params.id, res);
})

app.get('/produtos', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from produto', res);
})

app.post('/produto/cadastro', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into produto (nome, capacidade, preco, img) values('" + req.body.nome + "','" + req.body.capacidade + "','" + req.body.preco + "','" + req.body.img + "')", res);
})

app.put('/produto/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update produto set nome='" + req.body.nome + "'," + "capacidade=" + req.body.capacidade + "," + "preco=" + req.body.preco + "," + "img='" + req.body.img + "'" + "where id=" + req.params.id, res);
})

app.delete('/produto/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from produto where id=" + req.params.id, res);
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))