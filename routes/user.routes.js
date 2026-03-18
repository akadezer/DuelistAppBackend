const express = require('express');
const userRoutes = express.Router();
const getUser = require('../controller/user.controller').getUser;
const createUser = require('../controller/user.controller').createUser;
const deleteUser = require('../controller/user.controller').deleteUser;
const updateUser = require('../controller/user.controller').updateUser;


userRoutes.get('/user',getUser);
userRoutes.post('/createUser',createUser);
userRoutes.delete('/user',deleteUser);
userRoutes.put('/user',updateUser);

exports.userRoutes = userRoutes;