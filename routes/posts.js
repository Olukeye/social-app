const express = require("express");
const router = new express.Router();


const {createPost, updatePost, deletePost} = require('../controller/posts');

router.post('/posts', createPost)
router.put('/post/:id', updatePost )
router.delete('/post/:id', deletePost)



module.exports = router;