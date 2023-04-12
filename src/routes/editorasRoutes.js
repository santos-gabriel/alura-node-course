import express from 'express';
import EditorasController from '../controllers/editorasController.js';

const router = express.Router();

router
  .get('/editoras', EditorasController.listarEditoras)
  .get('/editoras/:id', EditorasController.listarEditoraId)
  .post('/editoras', EditorasController.cadastrarEditora)
  .put('/editoras/:id', EditorasController.atualizarEditora)
  .delete('/editoras/:id', EditorasController.deletaEditora);

export default router;