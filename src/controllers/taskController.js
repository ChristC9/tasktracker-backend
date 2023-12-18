const asyncHandler = require('express-async-handler');
const Task = require('../models/Task');

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();
    res.status(200).send(tasks);
});

// @desc Post a task
// @route POST /api/tasks
// @access Public

const postTask = asyncHandler(async (req, res) => {
    const task = await Task.create({
        "text": req.body.text,
        "day": req.body.day,
        "reminder": req.body.reminder,
    });
    res.status(201).send({
        
        message: "Task added successfully",
        data: {
            _id: task._id,
            text: task.text,
            day: task.day,
            reminder: task.reminder,
        }
    })
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public

const deleteTask = asyncHandler(async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }
    res.status(200).send({ message: `Task id ${req.params.id} has been removed` });
})

//@desc     Update a task
//@route    PUT /api/tasks/:id
//@access   Public

const updateTask = asyncHandler(async (req, res) => {
    
    // const task = await Task.findById(req.params.id);
    // if (!task) {
    //     res.status(404);
    //     throw new Error('Task not found');
    // }
    console.log(req.body)
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).send({message: `Task id ${req.params.id} has been updated`, data: updateTask});

})

//@desc    Get a specific task
//@route   GET /api/tasks/:id
//@access  Public

const getSpecicTask = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }
    res.status(200).send({data: task});
})

module.exports = { getTasks, postTask, deleteTask,updateTask,getSpecicTask };