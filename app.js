const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const { getCardsAction } = require("./src/actions/get-cards");
const { signupAction } = require("./src/actions/sign-up-user");
const { loginAction } = require("./src/actions/login-user");
const { getLoggedUserAction } = require("./src/actions/get-logged-user");

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./src/passport-config")(passport);

app.get("/cards", getCardsAction);
app.post("/register", signupAction);
app.post("/login", loginAction);
app.get("/user", getLoggedUserAction);

app.listen(4000, () => {
  console.log("Server has started");
});
