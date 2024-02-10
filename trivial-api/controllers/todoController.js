const todoModel = require('../models/todoModel')
const mongoose = require('mongoose');

const getAllTodos = async (req, res) => {
  const todos = await todoModel.find({}).sort({ createdAt: -1});
  res.status(200).send(todos);
}

const createTodo = async (req, res) => {
  const { title, isComplete  } = req.body;
  try {
    const todo = await todoModel.create({ title, isComplete });
    res.status(200).json(todo);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
}

const deleteTodo = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'invalid id'})
  }

  const filter = { _id: id }
  
  try {
    const todo = await todoModel.findOneAndDelete(filter);

    if (!todo) {
      return res.status(404).send({error: 'no such todo'})
    }

    res.status(200).json(todo);

  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
}


const updateTodo = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'invalid id'})
  }

  const filter = { _id: id }
  const update = { ...req.body }
  
  try {
    const todo = await todoModel.findOneAndUpdate(filter, update);

    if (!todo) {
      return res.status(404).send({error: 'no such todo'})
    }

    const updatedTodo = await todoModel.findOne(filter);
    res.status(200).json(updatedTodo);

  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
}

module.exports = {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo
}