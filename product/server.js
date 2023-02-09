import app from "./src/app.js";

const port = process.env.port || 3001;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));