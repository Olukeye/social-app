const express = require('express')
const Post = require('../model/posts')
const router = express.Router();


exports.createPost = async(req, res ) => {
    // const post = new Post(req.body.description)
    const post = await new Post(
        req.body
    )
    try{
        if(req.body.description.length === 0) {
            res.status(300).json("Post cant be empty!");
            
        } else {
        const savePost = await post.save();
        res.status(200).json(savePost);
        }
    } catch(err) {
        res.status(500).json(err)
    }
}

