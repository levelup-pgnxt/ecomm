import Categorias from '../models/Categoria.js';
import validacaoCategoria from '../validations/categoriaValidations.js';
import STATUS_ATIVA from '../constantes.js';

class CategoriaController {
  static listarCategorias = (req, res) => {
    Categorias.find((err, categorias) => {
      if (!categorias) {
        return res.status(404).send({ message: 'Categorias não encontradas' });
      }
      return res.status(200).json(categorias);
    });
  };

  static listarCategoriaPorId = (req, res) => {
    const { id } = req.params;

    Categorias.findById(id, (err, categorias) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!categorias) {
        res.status(404).send({ message: 'Categoria não encontrada' });
      } else {
        res.status(200).send(categorias);
      }
    });
  };

  static criarCategoria = (req, res) => {
    const nomeCategoria = req.body.nome;

    if (!validacaoCategoria(nomeCategoria)) {
      res.status(400).send({ message: 'Nome da categoria inválido' });
    } else {
      const categoria = new Categorias(req.body);

      categoria.save((err) => {
        if (err) {
          res.status(500).send({ message: `${err.message} - Falha ao cadastrar categoria.` });
        } else {
          res.status(201).send(categoria.toJSON());
        }
      });
    }
  };

  static atualizarCategoria = (req, res) => {
    const nomeCategoria = req.body.nome;
    const { id } = req.params;

    if (!validacaoCategoria(nomeCategoria)) {
      res.status(400).send({ message: 'Nome da categoria inválido' });
    } else {
      Categorias.findByIdAndUpdate(id, req.body, (err, categorias) => {
        if (err) {
          res.status(500).send({ message: err.message });
        } else if (!categorias) {
          res.status(404).send({ message: 'Categoria não encontrada.' });
        } else {
          res.status(204).send({ message: 'Categoria atualizada com sucesso.' });
        }
      });
    }
  };

  static excluirCategoria = (req, res) => {
    const { id } = req.params;

    Categorias.findByIdAndDelete(id, (err, categorias) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!categorias) {
        res.status(404).send({ message: 'Categoria não encontrada.' });
      } else {
        res.status(200).send({ message: 'Categoria excluida com sucesso.' });
      }
    });
  };

  static ativaCategoria = (req, res) => {
    const { id } = req.params;

    Categorias.findByIdAndUpdate(id, { $set: { status: STATUS_ATIVA } }, (err, categorias) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!categorias) {
        res.status(404).send({ message: 'Categoria não encontrada.' });
      } else {
        res.status(200).json(categorias);
      }
    });
  };
}

export default CategoriaController;
