const userModel = require('../models/user.model').userModel;

exports.getUser = (req, res,next) => {
    const userId = req.body.id;
    const user = userModel.find({'DuelantenId': userId})
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {console.log(err)});
};

exports.createUser = (req, res,next) => {
    userModel.create({
        DuelantenId: "1",
        username: "Yugi Muto",
        email: "yugi@example.com",
        password: "exodia",
        DeckIds: [],
        SammlungId: null,
        FriendlistId: null})
        .then(result => {
            res.status(200);
            res.send('User created successfully');
        })
        .catch(err => {console.log(err)});
    }
