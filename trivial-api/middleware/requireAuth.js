const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {

  const { authorization } = req.headers;
console.log({authorization})
  if (!authorization) {
    res.send(401).json({ error: 'must include jwt' });
    return;
  } 

  // authorization looks like this: 'bearer asldkfjhasdf9asu98auys9d8hfasdf.asdf.asfasd'
  const token = authorization.split(" ")[1];

  try {
    const { _id} = jwt.verify(token, process.env.JWT_SECRET)

    // attach the `user` property to all request
    req.user = User.findOne({ _id }).select("_id")
    next();
    return;
  } catch (error) {
    console.log('error', error)
    return res.status(401).json({ error: 'request is not authorized' })
  }
}

module.exports = requireAuth;
