// regra de negócio -> validação de dados

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        id: {type: String},
        nomeCategoria: {type: String, required: true},
        statusCategoria: {type: String}
    }
)

const categories = mongoose.model('categories', categorySchema)

export default categories;