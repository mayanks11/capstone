//dule.exports = (sequelize, DataTypes) => {
  const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    profile_pic: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    address: {
      type: String,
    },
    phone_number: {
      type: String,
    },
  });

  
  const user = mongoose.model('user', userSchema);

  module.exports = user;


