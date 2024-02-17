const workoutModel = require('../models/workoutModel')
const mongoose = require('mongoose');

const getWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1});
  res.status(200).send(workouts);
}

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await workoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
}

const deleteWorkout = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'invalid id'})
  }

  const filter = { _id: id }
  
  try {
    const todo = await workoutModel.findOneAndDelete(filter);

    if (!todo) {
      return res.status(404).send({error: 'no such workout'})
    }

    res.status(200).json(todo);

  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
}

module.exports = {
  createWorkout,
  getWorkouts,
  deleteWorkout,
}