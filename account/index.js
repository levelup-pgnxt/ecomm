import app from './src/app.js';

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});