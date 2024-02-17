const express = require('express');
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  deleteWorkout,
} = require('../controllers/workoutController');


router.get('/', getWorkouts)

router.post('/', createWorkout)

router.delete('/', deleteWorkout)

module.exports = router;