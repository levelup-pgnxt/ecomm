import products from "../models/produtos.js";

class produtosController {

  static listarProdutos = (req, res) => {
    products.find((err, products) => {
      res.status(200).json(products)
  })
  }

  static inserirProdutos = (req, res) => {
    let product = new products(req.body);

    product.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar um produto.`})
      } else {
        res.status(201).send(product.toJSON())
      }
    })
  }
  //foi inserido uma categoria

  static listarProdutosPorId = (req, res) => {
    const id = req.params.id;

    products.findById(id, (err, products) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id da categoria não localizado.`})
      } else {
        res.status(200).send(products);
      }
    })

  //busquei by id



  
}



static atualizarProdutos = (req, res) => {
  const id = req.params.id;

  products.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Produto atualizado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
}

static ativarProdutos = (req, res) => {
  const id = req.params.id;

  products.findByIdAndUpdate(id, {$set: {'STATUS':'ATIVA'}}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Produto ativado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
}

static excluirProdutos = (req, res) => {
  const id = req.params.id;

  products.findByIdAndDelete(id, (err) => {
    if(!err){
      res.status(200).send({message: 'Produto removido com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
}
//atualizou um produtos




}   

/*

***importante*** abrir chaves 

  

  

  

  

}
*/

export default produtosController

//utilizado para criar "funções" que realizarão as funções, como buscar, excluir e etc