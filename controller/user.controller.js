const userModel = require('../models/user.model').userModel;

exports.getUser = (req, res,next) => {
    res.send('User data retrieved successfully');
    res.status(200);
    next(); 
};