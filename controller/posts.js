const express = require('express')
const Post = require('../model/posts')
const router = express.Router();


exports.createPost = async(req, res ) => {
    // const post = new Post(req.body)
    const post = new Post(req.body)
    try{
        if(post.length < 0 ) {
            res.status(300).send("Post cant be empty!");
        }
        const savePost = await post.save();
        res.status(200).json(savePost);
    } catch(err) {
        res.status(500).json(err)
    }
}