const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  password: {
    type: String,
    required: [true, "password field is required"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: null,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

const validate = (user) => {
  const schema = Joi.object({
    username: Joi.string().required("userName is required"),
    password: Joi.string().length(6).required("password is required"),
  });
  return schema.validate(user);
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
