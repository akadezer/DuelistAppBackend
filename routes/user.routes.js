const express = require('express');
const userRoutes = express.Router();
const getUser = require('../controller/user.controller').getUser;

userRoutes.get('/user',getUser);

exports.userRoutes = userRoutes;