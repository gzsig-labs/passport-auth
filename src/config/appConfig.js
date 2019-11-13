const express = require('express');
const {root} = require('../constants')
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const viewsPath = `${root}/views`;

const flash = require("connect-flash");

const session = require("express-session");
const {passportConfig} = require("./passportConfig");

const {pageRouter} = require('../routes/page')
const {userRouter} = require('../routes/user')

app.use(flash());

app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));

app.use(passportConfig.initialize());
app.use(passportConfig.session());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(`${root}/public`));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(`${viewsPath}/components`)

app.use(pageRouter)
app.use(userRouter)

module.exports = {app};