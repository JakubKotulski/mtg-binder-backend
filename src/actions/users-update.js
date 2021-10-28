const Card = require("../models/user/user");

const updateUsersAction = async (req, res) => {
  try {
    const name = req.body.name;
    const surname = req.body.surname;
    const phoneNumber = req.body.phoneNumber;
    const _id = req.body._id;

    await Card.updateOne({ _id: _id }, { $set: { name: name, surname: surname, phoneNumber: phoneNumber } });
    res.status(200);
  } catch (e) {
    console.log("ERR", e);
  }
};

module.exports = { updateUsersAction };
