const express = require('express');
const router = express.Router();
const { getTasks, createTask, getTask, updateTask, completeTask, deleteTask } = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

router.route("/:id/complete").put(completeTask);

module.exports = router;