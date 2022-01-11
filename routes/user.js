const express = require('express')
const router  = new express.Router()


const  { update, read } = require('../controller/user')


router.put('/:id', update);
// router.delete('/user/:id', remove);
router.get('/:id', read);
// follow & unfollow user
// like and unlike user

module.exports = router;

