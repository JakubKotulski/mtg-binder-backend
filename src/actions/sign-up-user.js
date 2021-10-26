const bcrypt = require("bcryptjs");
const User = require("../models/user/user");

const signupAction = (req, res) => {
  console.log(req.body);
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.status(404).send({ message: "User Already Exist" });
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        name: req.body.name,
        surname: req.body.surname,
        phoneNumber: req.body.phoneNumber,
      });
      await newUser.save();
      res.json(newUser);
    }
  });
};

module.exports = { signupAction };
