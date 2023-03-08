/* eslint-disable no-underscore-dangle */
import Produtos from '../models/Produto.js';

class ProdutoController {
  static listarProdutos = (req, res) => {
    Produtos.find((err, produtos) => res.status(200).json(produtos));
  };

  static criarProduto = (req, res) => {
    const produto = new Produtos(req.body);

    produto.save((err, product) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).location(`/api/products/${product._id}`).send(produto.toJSON());
      }
    });
  };

  static listarProdutoPorId = (req, res) => {
    const { id } = req.params;

    Produtos.findById(id, (err, produto) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!produto) {
        res.status(404).send({ message: 'Produto não encontrado.' });
      } else {
        res.status(200).send(produto);
      }
    });
  };

  static atualizarProduto = (req, res) => {
    const { id } = req.params;

    Produtos.findByIdAndUpdate(id, req.body, (err, produto) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!produto) {
        res.status(404).send({ message: 'Produto não encontrado.' });
      } else {
        res.status(204).send({ message: 'Produto atualizado com sucesso.' });
      }
    });
  };

  static excluirProduto = (req, res) => {
    const { id } = req.params;

    Produtos.findByIdAndDelete(id, (err, produto) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else if (!produto) {
        res.status(404).send({ message: 'Produto não encontrado.' });
      } else {
        res.status(200).send({ message: 'Produto excluido com sucesso.' });
      }
    });
  };
}

export default ProdutoController;
