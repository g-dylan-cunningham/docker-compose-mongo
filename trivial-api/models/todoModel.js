const mongoose = require('mongoose');
const Schema = mongoose.Schema

const todoSchema = new Schema(
  { // first arg defines schema members
    title: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
    },
  },
  { // second arg is for model config
    timestamps: true,
  }
);

module.exports = mongoose.model('Todo', todoSchema);
