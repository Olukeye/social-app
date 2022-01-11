const express = require('express')
const User = require('../model/user')
const bcrypt = require('bcrypt')
const router  = new express.Router()

exports.update =  async(req, res) => {
        // if is userId or user is Admin , update.
        if(req.body.userId === req.params.id || req.user.isAdmin) {
            // encript password if match
            if(req.body.password) {
        try{
            const salt = await bcrypt.genSalt(10);  //>>> hashPassword
            req.body.password = await bcrypt.hash(req.body.password, salt, process.env.SECRET_KEY).toString();
        } catch (err) {
            res.status(500).json(err)
        }
    }
    try{
        const user = await User.findByIdAndUpdate(req.params.id, {
             $set: req.body}, {new: true});
       res.status(200).json(user);
    } catch(err){
        res.status(403).json("updated!")
    }
    } else {
        res.status(403).json("Allowed to update account only!")
    }
}

exports.read = async(req, res ) => {
    try{
 const user = await User.findById(req.params.id);
 const { password,updatedAt, ...other } = user._doc;
 res.status(200).json(other)
 
 } catch(err){
  res.status(500).json(err)
 }
}

// exports.remove = () => {

// }