import Categories from '../models/categories';

class CategoriesController {
  static listarCategories = (req, res) => {
    Categories.find((err, category) => {
      if (err) {
        return res
          .status(400)
          .send({ message: `${err.message} - Informações não encontradas.` });
      }
      return res.status(200).send(category);
    });
  };

  static inserirCategories = (req, res) => {
    const category = new Categories(req.body);

    category.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - falha ao cadastrar uma categoria.`,
        });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };
  // foi inserido uma categoria

  static listarCategoriesPorId = (req, res) => {
    const { id } = req.params;

    Categories.findById(id, (err, category) => {
      if (err) {
        res.status(400).send({
          message: `${err.message} - Id da categoria não localizado.`,
        });
      } else {
        res.status(200).send(category);
      }
    });

    // busquei by id
  };

  static atualizarCategories = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria atualizada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static ativarCategories = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: { STATUS: 'ATIVA' } }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria atualizada com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirCategories = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Categoria removida com sucesso' });
        // se colocar 204 a mensagem não aparece
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  // atualizou um categories
}

/*

***importante*** abrir chaves
}
*/
export default CategoriesController;

// utilizado para criar "funções" que realizarão as funções, como buscar, excluir e etc
