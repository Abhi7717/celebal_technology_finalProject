const express = require('express');
const { createTask, getTasks, updateTask, deleteTask,  updateTaskStatus} = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, createTask)
    .get(protect, getTasks);

router.route('/:id')
    .put(protect, updateTask)
    .delete(protect, deleteTask);

// module.exports = router;

// const express = require('express');
// const { createTask, getTasks, updateTask, deleteTask, updateTaskStatus } = require('../controllers/taskController');
// const { protect } = require('../middleware/authMiddleware');
// const router = express.Router();

// router.route('/')
//     .post(protect, createTask)
//     .get(protect, getTasks);

router.route('/:id')
    .put(protect, updateTask)
    .delete(protect, deleteTask);

// Add this route for updating task status
router.route('/:id/status')
    .put(protect, updateTaskStatus);

module.exports = router;
