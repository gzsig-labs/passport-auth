const passport = require("passport");

const loginPost = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
});


module.exports = {loginPost}