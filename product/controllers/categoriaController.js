import categorias from "../models/Categoria.js";
import validacaoCategoria from "../validations/categoriaValidations.js";

class CategoriaController {

    static listarCategorias = (req, res) => {
        categorias.find((err, categorias) => {
            res.status(200).json(categorias)
        })
    }

    static listarCategoriaPorId = (req, res) => {
        const id = req.params.id

        categorias.findById(id, (err, categorias) => {
            if(err) {
                res.status(404).send({message: `${err} - Categoria não encontrada`})
            } else {
                res.status(200).send(categorias)
            }
        })
    }

    static criaCategoria = (req, res) => {
        let nomeCategoria = req.body.nome

        if(!validacaoCategoria(nomeCategoria)) {
            res.status(400).send({message: 'Nome da categoria inválido'})
        } else {
            let categoria = new categorias(req.body);

            categoria.save((err) => {
                if(err) {
                    res.status(500).send({message: `${err.message} - Falha ao cadastrar categoria.`})
                } else {
                    res.status(201).send(categoria.toJSON())
                }
            })
        }
    }

    static atualizaCategoria = (req, res) => {
        let nomeCategoria = req.body.nome
        const id = req.params.id

        if(!validacaoCategoria(nomeCategoria)) {
            res.status(400).send({message: 'Nome da categoria inválido'})
        } else {
            categorias.findByIdAndUpdate(id, {$set: req.body}, (err) => {
                if(err) {
                    res.status(404).send({message: `${err.message} - Categoria não encontrada`})
                } else {
                    res.status(200).send({message: 'Categoria atualizada com sucesso.'})
                }
            })
        }
    }
}


export default CategoriaController;