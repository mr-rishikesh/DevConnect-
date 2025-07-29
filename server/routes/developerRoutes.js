// server/routes/developerRoutes.js

const express = require('express');
const router = express.Router();
const { getAllDevelopers } = require('../controller/developerController');

router.get('/', getAllDevelopers); // Handles ?page=1&limit=10

module.exports = router;
