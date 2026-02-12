const bcrypt = require('bcryptjs');
const userService = require('../services/user.service');
const { generateToken } = require('../services/jwt.service');
const { getJwks } = require('../config/keys');

async function login(req, res) {
  const { email, password } = req.body;

  const user = userService.findByEmail(email);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);

  if (!isValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = generateToken(user);

  res.json({
    access_token: accessToken,
    token_type: "Bearer",
    expires_in: process.env.JWT_EXPIRES_IN
  });
}

function jwks(req, res) {
  res.json(getJwks());
}

module.exports = { login, jwks };
