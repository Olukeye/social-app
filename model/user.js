const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {type:String, require: true, min: 3, max: 32, unique: true},
    email: {type:String, require: true, max: 42, unique: true},
    password: {type: String, require: true, min: 6, max: 20 },
    profilePicture: {type: String, default: ""},
    isAdmin: {type:Boolean, default: false},
    followers: {type:Array, default: []},
    following: {type:Array, default: []},
    relationship: {type:Number, enum:[1, 2, 3]}
}, {timestamps: true} )

module.exports = mongoose.model("User", UserSchema);