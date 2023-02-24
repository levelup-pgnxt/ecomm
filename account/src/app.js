import express, { json } from "express";
import swaggerUi from "swagger-ui-express";
import dbAccount from "./config/dbConnect.js";
import routes from "./routes/index.js";
import swaggerAccount from "../swagger/account.json" assert {type: "json"};

dbAccount.on("error", console.log.bind(console, 'Erro de conexão'));
dbAccount.once("open", () => {
    console.log('conexão com o banco feita com sucesso');
});

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerAccount));
routes(app);

export default app;