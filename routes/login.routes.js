const express = require('express');
const loginRoutes = express.Router();
const loginUser = require('../controller/login.controller').loginUser;

loginRoutes.post('/login', loginUser);

exports.loginRoutes = loginRoutes;