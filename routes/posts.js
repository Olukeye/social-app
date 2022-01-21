const express = require("express");
const router = new express.Router();


const {createPost, updatePost} = require('../controller/posts');

router.post('/posts', createPost)
router.put('/post/:id', updatePost )



module.exports = router;