// server/routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const { getAllProjects } = require('../controller/projectController');

router.get('/', getAllProjects); // Handles ?page=1&limit=10

module.exports = router;
