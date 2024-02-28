const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());

const cors = require("cors");
const { connection } = require("./db");
const { projectRouter } = require("./routes/project.route");
app.use(
  cors({
    origin: "*",
  })
);

app.use("/projects",projectRouter)

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Project Tracker Base Point" });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to DB successfully!");
    console.log(`Server is running at port ${PORT}`);
  } catch (error) {
    console.log("Error while connecting DB");
    console.log("error:", error);
  }
});
