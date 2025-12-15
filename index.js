const express = require('express');
const mongoose = require('./database/database').mongoose;
const app = express();
const port = 3000;
const userModel = require('./models/user.model').userModel;
const userRoutes = require('./routes/user.routes').userRoutes;

app.use(userRoutes);

app.post('/', (req, res, next) => {
    res.send('POST request to the homepage');
    console.log('Received a POST request');
    next();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});