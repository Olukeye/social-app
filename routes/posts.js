const express = require("express");
const router = new express.Router();


const {createPost} = require('../controller/posts');

router.post('/posts', createPost)




module.exports = router;