const User = require('../model/user')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// const apiKey = '5fde63d31aa4cad60071ade03d74e773-20ebde82-3a27322d';
// const mailgun = require("mailgun-js");
// const domain = 'sandbox5d1c9264431744dba6f3041d4fa22864.mailgun.org';
// const mg = mailgun({apiKey: apiKey, domain: domain});

// Register user 
exports.Register = async(req, res) => {
    try{
        // check for existing email
    let user = await User.findOne({email: req.body.email});
    if(user) {
       return res.status(401).send("Given email already exist!")
    }
     // hash & Salt  Password
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(req.body.password, salt);
        user = await new User({
            username:req.body.username,
            email:req.body.email,
            password:hashed_password,
        }).save();   

        // check if password match
        if(req.body.password !== req.body.confirm_password) {
            res.status(400).json({message: "Password do not match!"});
        } else {
             // returned response
            //  const user = await newUser.save();
        res.status(200).json(user);
        }
        //    const data = {
        //     from: 'olukeye1987@gmail.com',
        //     to: 'seunolukeye2000@gmail.com',
        //     subject: 'Hello',
        //     text: 'Testing some Mailgun awesomness!'
        // };
        // mg.messages().send(data, function (error, body) {
        //     console.log(body);
        // });

    }catch(err){
        res.status(500).json(err)
    }
}

// Login User 
exports.Login = async(req, res ) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User does not exist. Please sign in !")
        
        // compare password
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Email or password dont match!")

        // token
        const token = jwt.sign({_id: user._id},"" + process.env.JWT_SECRET);
        res.cookie('t', token, {expire: new Date() + 9999})
        
    res.status(200).json({user, token});
    }catch(err) {
        res.status(500).json(err)
    }
}