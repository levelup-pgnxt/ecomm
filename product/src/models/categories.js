import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    id: {type: String},
    NOME:
    { type: String,
      minLength: 3,
      match: /^[a-zA-Z][a-zA-Z0-9]*/,
      required: true

    //metodo elegante "fork" de um amigo 
    },
    STATUS: {type: String}
  }
);

const categories = mongoose.model("category", categoriesSchema)

export default categories;


//modelo de categoria, ao cadastrar um modelo ou "olhar" ele deve seguri esse modelo