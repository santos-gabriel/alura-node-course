import livros from '../models/Livro.js';

class LivrosController {

  static listarLivros (req, res) {
    livros.find()
      .populate('autor')
      .populate('editora')
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  }

  static listarLivroId (req, res) {
    const id = req.params.id;
    livros.findById(id)
      .populate('autor', 'nome')
      .populate('editora')
      .exec((err, livros) => {
        if (err) {
          res.status(500).send({message: `${err.message} - falha ao localizar livro.`});
        }
        if (livros && livros !== null) {
          res.status(200).json(livros);
        } else {
          res.status(404).send({message: `livro ${id} não encontrado.`});
        }
      });
  }

  static cadastrarLivro (req, res) {
    const livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  }

  static atualizarLivro (req, res) {
    const id = req.params.id;
    
    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Livro atualizado com sucesso'});
      } else {
        res.status(500).send({message: `${err.message} - falha ao atualizar livro.`});
      }
    });
  }
  
  static deletaLivro (req, res) {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({message: 'Livro removido com sucesso'});
      } else {
        res.status(500).send({message: `${err.message} - falha ao remover livro.`});
      }
    });
  }

  static listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora;
    livros.find({'editora': editora}, {}, (err, livros) => {
      if (err) {
        res.status(500).send({message: `${err.message} - falha ao localizar livro.`});
      }
      if (livros && livros !== null) {
        res.status(200).json(livros);
      } else {
        res.status(404).send({message: `livro ${id} não encontrado.`});
      }
    })
  }

}

export default LivrosController;