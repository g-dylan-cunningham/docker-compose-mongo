const express = require('express');
const router = express.Router();
const workoutModel = require('../models/workoutModel');


// router.get('/', (req, res) => {
//   res.send(JSON.stringify({
//     data: 'this is new backend'
//   }))
// })

router.get('/', async (req, res) => {
  try {
    const workouts = await workoutModel.find({});
    console.log('workouts',workouts)
    res.status(200).json(workouts);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
})

router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;
  console.log(title, load, reps)
  try {
    const workout = await workoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error })
  }
})

module.exports = router;