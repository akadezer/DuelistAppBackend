const mongoose = require('../database').mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    DuelistId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    DeckIds : [{ type: mongoose.Schema.Types.ObjectId }],
    CollectionId: { type: mongoose.Schema.Types.ObjectId },
    FriendlistId: { type: mongoose.Schema.Types.ObjectId }
});

exports.userSchema = userSchema;