// server/routes/projectRoutes.js

import express from 'express';
import {getAllProjects, createProject} from '../controllers/projectControllers.js';

const router = express.Router();

// @route   GET /api/projects?page=1&limit=10
// @desc    Get all projects with pagination
router.get('/', getAllProjects);

// @route   POST /api/projects
// @desc    Create a new project
router.post('/', createProject);

export default router;
