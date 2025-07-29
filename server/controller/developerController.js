// server/controllers/developerController.js

const Developer = require('../model/Developer');
const { getPagination } = require('../utilise/pagination');

const getAllDevelopers = async (req, res) => {
  try {
    const { page, limit, skip } = getPagination(req.query);

    const [total, developers] = await Promise.all([
      Developer.countDocuments(),
      Developer.find().skip(skip).limit(limit)
    ]);

    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      data: developers,
      meta: {
        total,
        page,
        totalPages,
        limit
      }
    });
  } catch (error) {
    console.error('Error fetching developers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllDevelopers
};
