const Card = require("../models/card/card");

const getCardsAction = (req, res) => {
  Card.find({ sold: false})
    .populate("userID")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { getCardsAction };
