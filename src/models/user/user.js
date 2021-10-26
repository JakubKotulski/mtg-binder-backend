const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  surname: String,
  phoneNumber: String,
});

module.exports = mongoose.model("User", user);
