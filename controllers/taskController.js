const asyncHandler = require("express-async-handler");
const Task = require("../models/Tasks");
//@desc Get all tasks
//@route Get /tasks
//@access Public
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
});

//@desc Create new task
//@route POST /tasks
//@access Public
const createTask = asyncHandler(async (req, res) => {
    console.log(req.body);

    const {name, description } = req.body;
    if (!name || !description) {
        // return res.status(400).json({ error: "Name and description are required" });
        res.status(400);
        throw new Error("Name and description are required");
    }

    const task = Task.create({
        name,
        description,
        completed: false
    })
    res.status(201).json({
        message: "Task created successfully",
    });
});

//@desc Get task by id
//@route Get /tasks/:id
//@access Public
const getTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    res.status(200).json(task);
});


//@desc Update task
//@route put /tasks/:id
//@access Public
const updateTask = asyncHandler(async (req, res) => {
    const task = await Task.findOneAndUpdate(req.params.id,
        req.body,
        { new: true });
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    res.status(200).json({
        message: "Task updated successfully"
    },
    task);
});

//@desc Complete task
//@route put /tasks/:id
//@access Public
const completeTask = asyncHandler(async (req, res) => {
   const task = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }
    res.status(200).json({
        message: "Task completed successfully",
        task
    });
});


//@desc Delete task
//@route Delete /tasks/:id
//@access Public
const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    res.status(200).json({
        message: "Task deleted successfully",
    });
});

module.exports = { getTasks, createTask, getTask, updateTask, completeTask,deleteTask };