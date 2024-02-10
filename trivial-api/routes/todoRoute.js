const express = require('express');
const router = express.Router();
const {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo
} = require('../controllers/todoController');


router.get('/', getAllTodos)

router.post('/', createTodo)

router.delete('/', deleteTodo)

router.patch('/', updateTodo)

module.exports = router;