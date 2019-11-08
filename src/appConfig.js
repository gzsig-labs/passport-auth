const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const viewsPath = `${__dirname}/views`;
const {pageRouter} = require('./routes/page')
const {userRouter} = require('./routes/user')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(`${viewsPath}/components`)

app.use(pageRouter)
app.use(userRouter)

module.exports = app;