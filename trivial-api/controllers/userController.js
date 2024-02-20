const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d'}) // expires in 3 days
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id)
    res.json({ token, email });
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
console.log('siguup1', email, password)
  try {
    const user = await User.signup(email, password);
    console.log('user', user)
    const token = createToken(user._id)
    console.log('token', token)
    res.json({ token, email });
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }

};

module.exports = {
  loginUser,
  signupUser,
};
