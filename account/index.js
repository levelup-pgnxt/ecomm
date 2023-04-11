import app from './src/app.js';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3004;

dotenv.config();

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
