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

exports.likesPost = async(req, res) => {
 try{
    //  like a post
    const post = await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.userId)) {
        await post.updateOne({$push: { likes: req.body.userId }}, {new:true})
        res.status(200).json(" liked!!")
    } else {
        await post.updateOne({$pull: { likes: req.body.userId }})
        res.status(403).json("Disliked")
    }
 } catch(err) {
     res.status(500).json(err)
 }
}

// exports.dislikePost = async(req, res) => {
//     try{
//        //  like a post
//        const dislike = await Post.findById(req.params.id);
//        if(!dislike.disLikes.includes(req.body.userId)) {
//            await dislike.updateOne({$pull: { disLikes: req.body.userId }})
//            res.status(200).json(" Disliked!!")
//        } 
//     } catch(err) {
//         res.status(500).json(err)
//     }
// }