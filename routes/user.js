const express = require('express')
const router  = new express.Router()

const  { update, read, follow, unFollow } = require('../controller/user')

router.put('/:id', update);
router.put('/:id/follow', follow);
router.put('/:id/unFollow', unFollow)
router.get('/:id', read);


// router.delete('/user/:id', remove);
// like and unlike user

module.exports = router;

