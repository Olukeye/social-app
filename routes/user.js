const express = require('express')
const router  = new express.Router()


const  { update, read, follow } = require('../controller/user')


router.put('/:id', update);
router.put('/:id/follow', follow);
router.get('/:id', read);




// router.delete('/user/:id', remove);
// follow & unfollow user
// like and unlike user

module.exports = router;

