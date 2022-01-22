const Post = require('../model/posts')

// create a post
exports.createPost = async(req, res ) => {
    const post = await new Post(req.body)
    try{
        if(req.body.description.length == 0) {
            res.status(300).json("Post Cant Be Empty!");
        } else {
        const savePost = await post.save();
        res.status(200).json(savePost);
        }
    } catch(err) {
        res.status(500).json(err)
    }
}

exports.updatePost = async(req, res) => {   
    const post = await Post.findById(req.params.id);
    if(post.userId == req.body.userId) {
        try{
             await post.updateOne({ $set:req.body })
            res.status(200).json("updated successfully!!")
        }catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("sorry you cant perform this!")
    }
}

// update a post
exports.deletePost = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId == req.body.userId){
             await post.deleteOne();
            res.status(200).json("Post delete successfully!!")
        } else {
            res.status(403).json("sorry you cant perform this!")
        }
    } catch(err) {
        res.status(500).json(err);
    }
}