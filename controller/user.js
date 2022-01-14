const User = require('../model/user')
const bcrypt = require('bcrypt')

exports.update =  async(req, res) => {
        if(req.body.userId === req.params.id || req.user.isAdmin) {     // if is userId or user is Admin , update.
            if(req.body.password) {     // encript password if match
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
        res.status(403).json("You can update only your account!")
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

exports.follow = async(req, res) => {
    // check if user are same
    if (req.body.userId !== req.params.id) {
        try{

        const followedMe = await User.findById(req.params.id);
        const iFollowed = await User.findById(req.body.userId);

        if(!followedMe.followers.includes(req.body.userId)) {    //if the user of account is not following, add to followers
            await followedMe.updateOne({$push: {followers: req.body.userId }});
            await iFollowed .updateOne({$push: {following: req.params.id }})
            res.status(200).json("followed!!!")
        } else {
            res.status(403).json("You are already a follower!")
        }                     
        } catch(err) {
            res.status(401).json(err)
        }
    }
}

exports.unFollow = async(req, res) => {
    // check if user are same
    if (req.body.userId !== req.params.id) {
        try{

            const unfollowedMe = await User.findById(req.params.id);
            const iUnFollowed = await User.findById(req.body.userId);

            if(unfollowedMe.followers.includes(req.body.userId)) {    //if the user of account is not following, add to followers
                await unfollowedMe.updateOne({$pull: {followers: req.body.userId }});
                await iUnFollowed .updateOne({$pull: {following: req.params.id }})
                res.status(200).json("You unfollowed!!!")
            }                 
        } catch(err) {
            res.status(401).json(err)
        }
    }
}
