const express = require('express');
const userRouter = express.Router();
const ensureLogin = require("connect-ensure-login");
const {UserRoutes} = require('../../controllers');


const {list, signUp, signUpPost, login, loginPost} = UserRoutes

userRouter.get('/user', ensureLogin.ensureLoggedIn(), list);
userRouter.get('/signup', signUp);
userRouter.post('/signup', signUpPost);
userRouter.get('/login', login);
userRouter.post('/login', loginPost);



module.exports = {userRouter}