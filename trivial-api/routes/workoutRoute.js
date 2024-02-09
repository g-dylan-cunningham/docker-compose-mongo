const express = require('express');
const router = express.Router();
const workoutModel = require('../models/workoutModel');
const {
  createWorkout,
  getWorkouts
} = require('../controllers/workoutController');



// router.get('/', (req, res) => {
//   res.send(JSON.stringify({
//     data: 'this is new backend'
//   }))
// })

router.get('/', getWorkouts)

router.post('/', createWorkout)

module.exports = router;