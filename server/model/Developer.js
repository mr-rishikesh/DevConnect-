const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    bio: {
      type: String,
      trim: true
    },
    techStack: {
      type: [String],
      default: []
    },
    github: {
      type: String,
      trim: true
    },
    portfolioUrl: {
      type: String,
      trim: true
    }
    // You can add social links, avatar, location, etc. as needed
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Developer', developerSchema);
