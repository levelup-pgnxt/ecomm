import express from "express";
import dbAccount from "./config/dbConnect.js";
import routes from "./routes/index.js"

dbAccount.on("error", console.log.bind(console, 'Erro de conexão'))
dbAccount.once("open", () => {
    console.log('conexão com o banco feita com sucesso');
})

const app = express();
app.use(express.json())
routes(app)

export default app;