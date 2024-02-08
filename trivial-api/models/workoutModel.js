const mongoose = require('mongoose');
const Schema = mongoose.Schema

const workoutSchema = new Schema(
  { // first arg defines schema members
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    }
  },
  { // second arg is for model config
    timestamps: true,
  }
);

module.exports = mongoose.model('Workout', workoutSchema);
