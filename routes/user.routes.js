const express = require('express');
const userRoutes = express.Router();
const getUser = require('../controller/user.controller').getUser;
const createUser = require('../controller/user.controller').createUser;

userRoutes.get('/user',getUser);
userRoutes.post('/user',createUser);

exports.userRoutes = userRoutes;