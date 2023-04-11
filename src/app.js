import express from 'express';

import db from './config/dbConnect.js';
import livros from './models/Livro.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso');
});

const app = express();

app.use(express.json());



app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
});

app.get('/livros', (req, res) => {
  livros.find((err, livros) => {
    res.status(200).json(livros);
  });
});

app.get('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index < 0) {
    res.status(404).send('Livro não encontrado');
  } else {
    res.status(200).json(livros[index]);
  }
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro foi cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
  const {id} = req.params;
  const index = buscaLivro(id);
  livros.splice(index, 1);
  res.status(200).send(`Livro ${id} removido com sucesso`);
});

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id === id);
}

export default app;