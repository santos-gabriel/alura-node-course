import express from 'express';
import LivrosController from '../controllers/livrosController.js';

const router = express.Router();

router
  .get('/livros', LivrosController.listarLivros)
  .get('/livros/busca', LivrosController.listarLivroPorEditora)
  .get('/livros/:id', LivrosController.listarLivroId)
  .post('/livros', LivrosController.cadastrarLivro)
  .put('/livros/:id', LivrosController.atualizarLivro)
  .delete('/livros/:id', LivrosController.deletaLivro);

export default router;