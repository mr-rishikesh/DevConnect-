// server/controllers/projectController.js

const Project = require('../model/Project');
const { getPagination } = require('../utilise/pagination');

const getAllProjects = async (req, res) => {
  try {
    const { page, limit, skip } = getPagination(req.query);

    const [total, projects] = await Promise.all([
      Project.countDocuments(),
      Project.find().skip(skip).limit(limit)
    ]);

    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      data: projects,
      meta: {
        total,
        page,
        totalPages,
        limit
      }
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllProjects
};
