const mongoose = require("mongoose");
const Card = require("./models/card");

mongoose.connect(
  "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/mtg-binder",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Moongose is connected");
  }
);

Promise.all([
  Card.create({
    name: "Test Card 1",
    price: 21.0,
    url: "https://a.allegroimg.com/original/11d4f9/72e89f3c4215a890e5462a3c1121/MtG-Swamp-V-2-ZNR",
  }),
  Card.create({
    name: "Test Card 2",
    price: 22.0,
    url: "https://a.allegroimg.com/original/11d4f9/72e89f3c4215a890e5462a3c1121/MtG-Swamp-V-2-ZNR",
  }),
  Card.create({
    name: "Test Card 3",
    price: 23.0,
    url: "https://a.allegroimg.com/original/11d4f9/72e89f3c4215a890e5462a3c1121/MtG-Swamp-V-2-ZNR",
  }),
  Card.create({
    name: "Test Card 4",
    price: 24.0,
    url: "https://a.allegroimg.com/original/11d4f9/72e89f3c4215a890e5462a3c1121/MtG-Swamp-V-2-ZNR",
  }),
  Card.create({
    name: "Test Card 5",
    price: 25.0,
    url: "https://a.allegroimg.com/original/11d4f9/72e89f3c4215a890e5462a3c1121/MtG-Swamp-V-2-ZNR",
  }),
]).then(() => {
  console.log("Success!");
  mongoose.disconnect();
});
