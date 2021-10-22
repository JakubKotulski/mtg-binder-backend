const mongoose = require("mongoose");
const User = require("../user/user");

const card = new mongoose.Schema({
  name: String,
  price: Number,
  url: String,
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  ownerPhoneNumber: String,
  ownerName: String,
  OwnerSurname: String,
});

module.exports = mongoose.model("card", card);
