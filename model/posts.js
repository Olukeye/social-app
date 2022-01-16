const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const postSchema = new mongoose.Schema({
    userId: {
        type:ObjectId,
        ref: 'User',
        // required:true
    },
    description: {
        type:String,
        max:250
    },
    img: {
        type:String
    },
    likes:[
        {
        type:ObjectId,
        ref: 'User', 
        }
    ],
    disLikes:[
        {
        type:ObjectId,
        ref: 'User', 
        }
    ],
    // likes: {
    //     type: Array,
    //     default:[]
    // },
    comment: [
        {
            user:{
                type:ObjectId,
                ref: 'User', 
            },
            text:{
                type:String,
                required:true
            }
        }
    ],
}, { timestamps: true} )

module.exports = mongoose.model("Post", postSchema);