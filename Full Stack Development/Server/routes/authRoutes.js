const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// 🛣️ Paths define karo
// Ye server.js mein '/api/auth' ke saath connect honge
router.post('/register', register);
router.post('/login', login);

module.exports = router;