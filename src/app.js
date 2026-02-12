require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const protectedRoutes = require('./routes/protected.routes');
const authController = require('./controllers/auth.controller');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/.well-known/jwks.json', authController.jwks);

app.get('/.well-known/openid-configuration', (req, res) => {
  res.json({
    issuer: 'https://kacy-promonopolistic-unturgidly.ngrok-free.dev',
    jwks_uri: 'https://kacy-promonopolistic-unturgidly.ngrok-free.dev/.well-known/jwks.json',
    response_types_supported: ['token'],
    subject_types_supported: ['public'],
    id_token_signing_alg_values_supported: ['RS256']
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Auth service running on port ${PORT}`);
});
