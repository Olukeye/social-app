const express = require("express");
const router = new express.Router();


const {createPost, updatePost, deletePost, likesPost} = require('../controller/posts');

router.post('/posts', createPost)
router.put('/post/:id', updatePost )
router.put('/post/:id/like', likesPost)
router.delete('/post/:id', deletePost)



module.exports = router;