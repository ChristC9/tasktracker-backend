const { Router } = require("express");

const router = Router();

const { getTasks, postTask, deleteTask, updateTask, getSpecicTask } = require('../controllers/taskController');

router.post('/api/tasks', postTask).get('/api/tasks', getTasks);
router.delete('/api/tasks/:id', deleteTask).put('/api/tasks/:id', updateTask);
router.get('/api/tasks/:id', getSpecicTask);

module.exports = router;