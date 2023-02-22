import app from "./src/app.js";

const port = process.env.port || 3004;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`))