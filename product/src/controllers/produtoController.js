import { response } from 'express';
import produtos from '../models/Produto.js';

class ProdutoController {

    static listarProdutos = (req, res) => {
        produtos.find((err, produtos) => {
            res.status(200).json(produtos)
        })
    }

    static criarProduto = (req, res) => {
        const produto = new produtos(req.body);

        produto.save((err) => {
            if(err){
                res.status(500).send({message: err.message})
            } else {
                res.status(201).location(`/api/products/${response._id}`).send(produto.toJSON())
            }
        })
    }

    static listarProdutoPorId = (req, res) => {
        const id = req.params.id

        produtos.findById(id, (err, produto) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if(!produto){
                res.status(404).send({message: 'Produto não encontrado.'})
            } else {
                res.status(200).send(produto)
            }
        })
    }

    static atualizarProduto = (req, res) => {
        const id = req.params.id

        produtos.findByIdAndUpdate(id, req.body, (err, produto) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if(!produto){
                res.status(404).send({message: 'Produto não encontrado.'})
            } else {
                res.status(200).send({message: 'Produto atualizado com sucesso.'})
            }
        })
    }

    static excluirProduto = (req, res) => {
        const id = req.params.id

        produtos.findByIdAndDelete(id, (err, produto) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else if(!produto) {
                res.status(404).send({message: 'Produto não encontrado.'})
            } else {
                res.status(200).send({message: 'Produto excluido com sucesso.'})
            }
        })
    }
}

export default ProdutoController;