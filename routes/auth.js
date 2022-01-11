const express = require('express')
const router  = new express.Router()

const  { Register, Login } = require('../controller/auth')


router.post('/register', Register);
router.post('/login', Login);

module.exports = router;


