import app from './src/app.js';

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});