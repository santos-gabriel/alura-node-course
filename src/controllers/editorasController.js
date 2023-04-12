import editoras from '../models/Editora.js';

class EditorasController {

  static listarEditoras (req, res) {
    editoras.find((err, Editoras) => {
      res.status(200).json(Editoras);
    });
  }

  static listarEditoraId (req, res) {
    const id = req.params.id;
    editoras.findById(id, (err, editoras) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao localizar editora.`});
      }
      if (editoras && editoras !== null) {
        res.status(200).json(editoras);
      } else {
        res.status(404).send({message: `editora ${id} não encontrado.`});
      }
    });
  }

  static cadastrarEditora (req, res) {
    const editora = new editoras(req.body);
    editora.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar editora.`});
      } else {
        res.status(201).send(editora.toJSON());
      }
    });
  }

  static atualizarEditora (req, res) {
    const id = req.params.id;
    
    editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Editora atualizado com sucesso'});
      } else {
        res.status(500).send({message: `${err.message} - falha ao atualizar editora.`});
      }
    });
  }
  
  static deletaEditora (req, res) {
    const id = req.params.id;
    editoras.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: 'Editora removido com sucesso'});
      } else {
        res.status(500).send({message: `${err.message} - falha ao remover editora.`});
      }
    });
  }

}

export default EditorasController;