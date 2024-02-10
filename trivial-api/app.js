const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');

const workoutRouter = require('./routes/workoutRoute');
const todoRouter = require('./routes/todoRoute');
const app = express()

app.use(express.json())
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.use('/workout', workoutRouter)
app.use('/todo', todoRouter)

// mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${process.env.PORT}`)
    })
  }).catch(err => console.log(err))

