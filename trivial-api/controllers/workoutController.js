const workoutModel = require('../models/workoutModel')


// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1});
  res.status(200).send(workouts);
}


// get single workout

// create workout

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

module.exports = {
  createWorkout,
  getWorkouts,
}