const express = require('express');
const router = express.Router();
const protectedController = require('../controllers/protected.controller');

router.get('/hello', protectedController.hello);

module.exports = router;