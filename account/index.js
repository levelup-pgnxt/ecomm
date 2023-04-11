import dotenv from 'dotenv';
import app from './src/app.js';

const PORT = process.env.PORT || 3004;

dotenv.config();

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
