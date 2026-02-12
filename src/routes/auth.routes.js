const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.get('/.well-known/jwks.json', authController.jwks);

module.exports = router;
