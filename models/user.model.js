const mongoose = require('../database').mongoose;
const userSchema = require('../schemas/user.schema').userSchema;
const userModel = mongoose.model('User', userSchema);

exports.userModel = userModel;