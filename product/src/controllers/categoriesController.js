import categories from "../models/Category.js";

class CategoryController {

    static listCategories = (req, res) => {
        categories.find((err, categories) => {
            res.status(200).json(categories);
        });
    }; 

    static insertCategory = (req, res) => {
        let category = new categories(req.body);
        const nameRegex = /^[a-zA-Z][a-zA-Z\d\s]{2,}$/;
        const name = req.body.name;
    
        if(!nameRegex.test(name)) {
            res.status(400).send({ error: 'Formato de nome inválido' });
            return;
        }
    
        category.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar Categoria.`});
            }else{
                res.status(201).send(category.toJSON());
            }
        });
    };

    static listCategoryById = (req, res) => {
        const id = req.params.id;
    
        categories.findById(id, (err, categories) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id da Categoria não localizado.`});
            } else {
                res.status(200).send(categories);
            }
        });
    };
    
     
};


export default CategoryController;