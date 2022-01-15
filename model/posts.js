const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;


const postSchema = mongoose.Schema({
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
                required:true 
            },
            text:{
                type:String,
                required:true
            }
        }
    ],
}, { timestamps: true} )

module.exports = mongoose.model("Post", postSchema);