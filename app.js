const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const { getCardsAction } = require("./src/actions/get-cards");
const { signupAction } = require("./src/actions/sign-up-user");
const { loginAction } = require("./src/actions/login-user");
const { getLoggedUserAction } = require("./src/actions/get-logged-user");
const { getLoggedUserCardsAction } = require("./src/actions/get-logged-user-cards");
const { addCard } = require("./src/actions/add-cards");
const { updateCardsAction } = require("./src/actions/update-cards");
const { markSoldCardsAction } = require("./src/actions/mark-sold-cards");
const { getCardAction } = require("./src/actions/get-card");
const { logout } = require("./src/actions/logout");
const { updateUsersAction } = require("./src/actions/users-update");

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

app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/mtg-binder",
    }),
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./src/passport-config")(passport);

app.get("/cards", getCardsAction);
app.post("/cards", addCard);
app.get("/cards/my", getLoggedUserCardsAction);
app.get("/cards/:id", getCardAction);
app.put("/cards/:id", updateCardsAction);
app.patch("/cards/:id/sold", markSoldCardsAction);

app.post("/users", signupAction);
app.post("/users/login", loginAction);
app.get("/users/me", getLoggedUserAction);
app.put("/users/update", updateUsersAction);

app.post("/logout", logout);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server has started");
});
