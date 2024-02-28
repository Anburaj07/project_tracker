const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  percentage: Number,
  status: String,
  task: Number,
  due_date: String,
  starting_date: String,
  about: String,
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = { ProjectModel };
