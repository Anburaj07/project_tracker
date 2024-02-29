const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  task_name: String,
  date: String,
  status: String,
  lead_name: String,
});

const TaskModel = mongoose.model("task", taskSchema);

module.exports = { TaskModel };
