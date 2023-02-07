import categories from "../models/categories.js";

class categoriesController {

  static listarCategories = (req, res) => {
    categories.find((err, Categories) => {
      res.status(200).json(Categories)
  })
  }

  static inserirCategories = (req, res) => {
    let category = new categories(req.body);

    category.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar uma categoria.`})
      } else {
        res.status(201).send(category.toJSON())
      }
    })
  }
  //foi inserido uma categoria

  static listarCategoriesPorId = (req, res) => {
    const id = req.params.id;

    categories.findById(id, (err, categories) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id da categoria não localizado.`})
      } else {
        res.status(200).send(categories);
      }
    })

  //busquei by id



  
}



static atualizarCategories = (req, res) => {
  const id = req.params.id;

  categories.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Categoria atualizada com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
}

static ativarCategories = (req, res) => {
  const id = req.params.id;

  categories.findByIdAndUpdate(id, {$set: {'STATUS':'ATIVA'}}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Categoria atualizada com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
}

static excluirCategories = (req, res) => {
  const id = req.params.id;

  categories.findByIdAndDelete(id, (err) => {
    if(!err){
      res.status(200).send({message: 'Categoria removida com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
}
//atualizou um categories




}   

/*

***importante*** abrir chaves 

  

  

  

  

}
*/

export default categoriesController

//utilizado para criar "funções" que realizarão as funções, como buscar, excluir e etc