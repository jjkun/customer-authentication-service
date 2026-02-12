require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const protectedRoutes = require('./routes/protected.routes');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);

app.use('/protected', protectedRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
