const express = require('express');
const userRouter = express.Router();
const {UserRoutes} = require('../../controllers');

userRouter.get('/users', UserRoutes.list);
userRouter.get('/signup', UserRoutes.signUp);
userRouter.post('/signup', UserRoutes.signUpPost);
userRouter.get('/login', UserRoutes.login);
userRouter.post('/login', UserRoutes.loginPost);



module.exports = {userRouter}