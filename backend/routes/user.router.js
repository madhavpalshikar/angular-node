const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const tasksController = require('../controllers/tasks.controller');
const auth = require('../middlerware/auth.middleware');


router.get('/login', userController.login);
router.get('/signup', userController.addUser);

router.post('/stats', auth.verify, tasksController.stats);
router.post('/addTask', auth.verify, tasksController.addTask);
router.post('/updateTask', auth.verify, tasksController.updateTask);
router.post('/deleteTask', auth.verify, tasksController.deleteTask);
router.post('/tasks', auth.verify, tasksController.tasks);
router.post('/updateOrder', auth.verify, tasksController.updateOrder);
router.post('/trash', auth.verify, tasksController.trash);
router.post('/trashDeleteTask', auth.verify, tasksController.trashDeleteTask);
router.post('/clearTrash', auth.verify, tasksController.clearTrash);


router.post('/logout', userController.logout);

module.exports = router;