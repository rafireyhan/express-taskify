const express = require("express");
const router = express.Router();

//Import Controller
const taskController = require("../controllers/taskController");

//Routes
router.post("/task", taskController.createTask);
router.get("/task", taskController.getTask);
router.put("/task", taskController.updateTask);
router.delete("/task", taskController.deleteTask);

module.exports = router;