const express = require('express');
const userRouter = express.Router();

const {UserRoutes} = require('../../controllers');
userRouter.get('/users', UserRoutes.list);


module.exports = {userRouter}