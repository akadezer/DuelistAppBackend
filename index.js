const express = require('express');
const mongoose = require('./database/database').mongoose;
const app = express();
const port = 3000;
const userModel = require('./models/user.model').userModel;
const userRoutes = require('./routes/user.routes').userRoutes;
const loginRoutes = require('./routes/login.routes').loginRoutes;


app.use((req, res, next) => {
    console.log('Received request:', req.method, req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(userRoutes);
app.use(loginRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});