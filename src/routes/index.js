const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const {Page} = require('../controllers');

router.get('/', Page.PageHome);

module.exports = {router}