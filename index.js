const express = require('express');
const mongoose = require('./database').mongoose;
const app = express();
const port = 3000;
const userModel = require('./models/user.model').userModel;

app.get('/', (req, res) => {
    const User = new userModel({
        DuelantenId: '12345',
        username: 'testuser',
        email: 'siuu',
        password: 'password123'
    });
    User.save().catch(err => console.log(err));
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
    console.log('Received a POST request');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});