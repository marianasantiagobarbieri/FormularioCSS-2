const express = require('express');
const path = require('path');
const { usuario, pessoa } = require('./models');
// o usuario e o pessoa está dentro a pasta models, e está no singular

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/pessoas', async function(req, res){
  var pessoas = await pessoa.findAll();
  res.render('index', { pessoas });
})


app.get('/pessoas/criar', async function(req, res){
  var pessoas = await pessoa.findAll();
  res.render('pessoas/criar', { pessoas });
})
//criei uma rota chamada chamada pessoas, diferente do outro que se chama usuarios
// pessoas/criar, o pessoas ´o nome da minha pasta e que esse código está, e  o criar é o nome do arquivo em que esse código está

app.post('/pessoas/criar', async function(req, res){
  console.log(req.body)
})


app.post('/pessoas/adicionar', async function(req, res){
  try {
      await pessoa.create(req.body);
      res.redirect('/pessoas')
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao criar a pessoa.' });
  }
})


app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});

//fulano/123 é o query
// fulano?nome="123"