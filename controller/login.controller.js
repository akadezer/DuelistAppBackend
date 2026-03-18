const userModel = require('../models/user.model').userModel;

exports.loginUser = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    userModel.find({'username': username, 'password': password})
    .then(user => {
        if (user.length > 0) {
            const origin = req.headers.origin;
            // remove later 
            console.log('Origin:', origin);
            if (origin) {
                res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    })
    .catch(err => {
        console.error('Error occurred while logging in:', err);
        res.status(500).json({ message: 'Internal server error' });
    });
};