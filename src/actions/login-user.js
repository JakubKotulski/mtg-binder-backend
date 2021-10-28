const passport = require("passport");

const loginAction = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exist");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({...req.user.toJSON(), password: undefined});
      });
    }
  })(req, res, next);
};

module.exports = { loginAction };
