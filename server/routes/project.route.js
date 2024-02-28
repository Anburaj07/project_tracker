const express = require("express");
const { ProjectModel } = require("../models/project.model");
const projectRouter = express.Router();

projectRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const projects = await ProjectModel.find(query);
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ error });
  }
});

projectRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await ProjectModel.findOne({ _id: id });
    if (!project) {
      res.status(400).json({ msg: "Project  not found!" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error });
  }
});

projectRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const project = new ProjectModel(payload);
    await project.save();
    res.status(201).json({ msg: "A new project has been created" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

projectRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    await ProjectModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).json({ msg: `Project with ${id} updated` });
  } catch (error) {
    res.status(400).json({ error });
  }
});

projectRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProjectModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: `Project with ${id} deleted` });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = { projectRouter };
