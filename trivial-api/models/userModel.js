const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    uniqu: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// extending the user model to include a custom method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("email and password are required");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    throw Error("Password is not strong enough");
  }

  // is email unique?
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  // a 'salt' is a random string added to all passwords before encryption.
  // this prevents hackers from 'password matching'
  const salt = await bcrypt.genSalt(10); // default value is 10, more is more secure
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("email and password are required");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email"); // make same message as bad password
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password"); // make more generic?
  }
    
  return user;
}

module.exports = mongoose.model("User", userSchema);
