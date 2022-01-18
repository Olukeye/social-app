const Post = require('../model/posts')


exports.createPost = async(req, res ) => {
    const post = await new Post(
        req.body
    )
    try{
        if(req.body.description.length === 0) {
            res.status(300).json("Post Cant Be Empty!");
            
        } else {
        const savePost = await post.save();
        res.status(200).json(savePost);
        }
    } catch(err) {
        res.status(500).json(err)
    }
}

