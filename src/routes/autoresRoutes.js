import express from 'express';
import AutoresController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get('/autores', AutoresController.listarAutores)
  .get('/autores/:id', AutoresController.listarAutorId)
  .post('/autores', AutoresController.cadastrarAutor)
  .put('/autores/:id', AutoresController.atualizarAutor)
  .delete('/autores/:id', AutoresController.deletaAutor);

export default router;