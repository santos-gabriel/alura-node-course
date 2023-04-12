import autores from '../models/Autor.js';

class AutoresController {

  static listarAutores (req, res) {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  }

  static listarAutorId (req, res) {
    const id = req.params.id;
    autores.findById(id, (err, autores) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao localizar autor.`});
      }
      if (autores && autores !== null) {
        res.status(200).json(autores);
      } else {
        res.status(404).send({message: `autor ${id} não encontrado.`});
      }
    });
  }

  static cadastrarAutor (req, res) {
    const autor = new autores(req.body);
    autor.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`});
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  }

  static atualizarAutor (req, res) {
    const id = req.params.id;
    
    autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Autor atualizado com sucesso'});
      } else {
        res.status(500).send({message: `${err.message} - falha ao atualizar autor.`});
      }
    });
  }
  
  static deletaAutor (req, res) {
    const id = req.params.id;
    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: 'Autor removido com sucesso'});
      } else {
        res.status(500).send({message: `${err.message} - falha ao remover autor.`});
      }
    });
  }

}

export default AutoresController;