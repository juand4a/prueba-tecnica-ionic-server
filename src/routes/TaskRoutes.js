const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');



router.get('/', TaskController.getAllTasks);
router.get('/buscar-puntos/:id', TaskController.getTaskById);
router.post('/', TaskController.createTask);
router.put('/:id',TaskController.updateTask)
router.delete('/:id',TaskController.deleteTask)

module.exports = router;