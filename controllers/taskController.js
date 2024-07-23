const Task = require('../models/task');
// const Task = require('../models/Task');




const createTask = async (req, res) => {
    const { title, description, deadline, category, assignedTo } = req.body;
    try {
        const task = await Task.create({
            title,
            description,
            deadline,
            category,
            assignedTo,
            createdBy: req.user.id,
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ createdBy: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update task status
const updateTaskStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['in-progress', 'complete'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status value' });
    }

    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        task.status = status;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.status(204).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, updateTask, deleteTask, updateTaskStatus };
// module.exports = { createTask, getTasks, updateTask, deleteTask };
