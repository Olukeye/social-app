const express = require("express");
const router = new express.Router();


const {createPost, updatePost, deletePost, likesPost} = require('../controller/posts');

router.post('/posts', createPost)
router.put('/post/:id', updatePost )
router.put('/post/:id/like', likesPost)
// router.put('/post/:id/dislike', dislikePost)
router.delete('/post/:id', deletePost)



module.exports = router;