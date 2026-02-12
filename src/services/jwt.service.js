const jwt = require('jsonwebtoken');
const { privateKey } = require('../config/keys');
const { v4: uuidv4 } = require('uuid');

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
      expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: process.env.JWT_ISSUER,
      audience: process.env.JWT_AUDIENCE,
      keyid: process.env.JWT_KID,
      jwtid: uuidv4()
    }
  );
}

module.exports = { generateToken };
