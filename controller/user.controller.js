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
    userModel.find({'DuelantenId': req.body.DuelantenId})
    .then(user => {
        console.log(user);
        if(user.length === 0){
        return userModel.create({
            DuelantenId: req.body.DuelantenId,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            DeckIds: [],
            SammlungId: null,
            FriendlistId: null});
        }else{
            console.log('User already exists');
            res.status(409).send('User already exists');
        }
        
    })
    .then((result) => {
        if(result){

            res.status(200);
            res.send('User created successfully');
        }
        })
    .catch(err => {console.log(err)});
    }

exports.deleteUser = (req, res,next) => {
    const userId = req.body.id;
    userModel.find({'DuelantenId': userId})
    .then(user => {
        if(user.length === 1){
        return userModel.deleteOne({'DuelantenId': userId})
            .then(result => {
                res.status(200).send('User deleted successfully');
            })
            .catch(err => {console.log(err)});
        }else{
            res.status(500).send('User not found');
        }
    })
    .catch(err => {res.status(500).send('Error finding user')});
};

exports.updateUser = (req, res,next) => {
    const userId = req.body.id;
    const updateData = req.body.username;
    userModel.find({'DuelantenId': userId})
    .then(user => {
        if(user.length === 1){
            return userModel.updateOne({'DuelantenId': userId}, {username: updateData})
            .then(result => {
                res.status(200).send('User updated successfully');
            })
            .catch(err => {console.log(err)});
        }else{
            res.status(500).send('User not found');
        }
    })
    .catch(err => {res.status(500).send('Error finding user')});
};