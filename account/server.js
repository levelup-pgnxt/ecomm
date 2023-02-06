import app from "./src/app.js";

const port = process.env.port || 3002;

app.listen(port, () => console.log(`Servidor escutando em http://localhost:${port}`));