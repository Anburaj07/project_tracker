const express = require("express");
const { TaskModel } = require("../models/task.model");
const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
  const { search } = req.query;
  const query = search ? { task_name: { $regex: search, $options: "i" } } : {};
  try {
    const tasks = await TaskModel.find(query);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error });
  }
});

taskRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await TaskModel.findOne({ _id: id });
    if (!task) {
      res.status(400).json({ msg: "Task not found!" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error });
  }
});

taskRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const task = new TaskModel(payload);
    await task.save();
    res.status(201).json({ msg: "A new task has been created" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

taskRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    await TaskModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).json({ msg: `Task with ${id} updated` });
  } catch (error) {
    res.status(400).json({ error });
  }
});

taskRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await TaskModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: `Task with ${id} deleted` });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = { taskRouter };
