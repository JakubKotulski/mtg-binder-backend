const Card = require("../models/card/card");

const addCard = async (req, res) => {
  try {
    const name = req.body.name;
    const url = req.body.url;
    const price = req.body.price;
    const ownerName = req.body.ownerName;
    const ownerSurname = req.body.ownerSurname;
    const ownerPhoneNumber = req.body.ownerPhoneNumber;

    const objectToInsert = new Card({
      name: name,
      price: price,
      url: url,
      userID: req.user._id,
      ownerPhoneNumber: ownerPhoneNumber,
      ownerName: ownerName,
      OwnerSurname: ownerSurname,
    });

    await objectToInsert.save();
    res.json(objectToInsert);
  } catch (e) {
    console.log("ERR", e);
  }
};

module.exports = { addCard };
