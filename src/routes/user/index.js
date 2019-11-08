const express = require('express');
const userRouter = express.Router();
const {UserRoutes} = require('../../controllers');

userRouter.get('/users', UserRoutes.list);
userRouter.get('/signup', UserRoutes.signUp);
userRouter.post('/signup', UserRoutes.signUpPost);


module.exports = {userRouter}