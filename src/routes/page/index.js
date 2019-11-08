const express = require('express');
const pageRouter = express.Router();

const { PageRoutes } = require('../../controllers');
pageRouter.get('/', PageRoutes.home);

module.exports = { pageRouter };
