import Products from '../models/produtos';

class produtosController {
  static listarProdutos = (req, res) => {
    Products.find((err, products) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(products);
    });
  };

  static inserirProdutos = (req, res) => {
    const product = new Products(req.body);

    product.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar um produto.` });
      } else {
        res.status(201).send(product.toJSON());
      }
    });
  };
  // foi inserido uma categoria

  static listarProdutosPorId = (req, res) => {
    const { id } = req.params;

    Products.findById(id, (err, products) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id da categoria não localizado.` });
      } else {
        res.status(200).send(products);
      }
    });

    // busquei by id
  };

  static atualizarProdutos = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Produto atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static zerarProdutos = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndUpdate(id, { $set: { quantidade: 0 } }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Produto zerado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirProdutos = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Produto removido com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  // atualizou um produtos
}

/*

***importante*** abrir chaves
}
*/

export default produtosController;

// utilizado para criar "funções" que realizarão as funções, como buscar, excluir e etc
