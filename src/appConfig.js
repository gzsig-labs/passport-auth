const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const viewsPath = `${__dirname}/views`;

const session = require("express-session");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {User} = require('./models')

const {pageRouter} = require('./routes/page')
const {userRouter} = require('./routes/user')

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

passport.use(new LocalStrategy((username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: "Incorrect username" });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: "Incorrect password" });
    }

    return next(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(`${viewsPath}/components`)

app.use(pageRouter)
app.use(userRouter)

module.exports = app;