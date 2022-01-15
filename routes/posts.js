const express = require("express");
const router = new express.Router();


const {createPost} = require('../controller/posts');

router.post('/posts/:id', createPost)




module.exports = router;