const express = require('express')
const Post = require('../model/posts')
const router = express.Router();


exports.createPost = async(req, res ) => {
    // const post = new Post(req.body)
    // const post = new Post({
        
    // })
    // try{
    //     // if(post ) {
    //     //     res.status(300).send("Post cant be empty!");
    //     // }
    //     const savePost = await post.save();
    //     res.status(200).json(savePost);
    // } catch(err) {
    //     res.status(500).json(err)
    // }

try{
    const post  = await new Post({
        description:req.body.description,
        comment:req.body.comment,
}).save()

if(req.body.description.length < 0) {
    res.status(400).json("post cannot be empty")
} else {
    res.status(200).json(post)
}
}catch (err){
    res.status(500).json(err)
}
}

