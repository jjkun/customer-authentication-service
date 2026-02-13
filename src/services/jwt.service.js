const jwt = require('jsonwebtoken');
const { privateKey } = require('../config/keys');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();


function generateToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      roles: user.roles,
      scope: "read write"
    },
    privateKey,
    {
      algorithm: "RS256",
      expiresIn: process.env.JWT_EXPIRES_IN || '15m',
      issuer: process.env.JWT_ISSUER || 'https://kacy-promonopolistic-unturgidly.ngrok-free.dev',
      audience: process.env.JWT_AUDIENCE || 'digital-ecosystem',
      keyid: process.env.JWT_KID || 'customer-auth-key-1',
      jwtid: uuidv4()
    }
  );
}

module.exports = { generateToken };
