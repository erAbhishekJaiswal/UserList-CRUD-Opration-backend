const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { authMiddleware } = require('../middleware/authmiddleware');

// Define a route
router.get('/userslist', authMiddleware , async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        console.log(error);
    }
});

router.put('/user/:id', authMiddleware , async (req, res) => {
    try {
        const editdata = {
            name: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            // password: req.body.password
        }
        const user = await User.findByIdAndUpdate(req.params.id, editdata, {
            new: true,
            runValidators: true
          });
        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
        
    }
    res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/user/:id', authMiddleware , async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({message:"User Record Fetched Successfully", firstname: user.firstname,lastname: user.lastname,email: user.email, id: user._id});
    } catch (error) {
        res.status(500).json({message:"Error fetching user record", error})
    }
});

router.delete('/user/:id', authMiddleware , async (req, res) => {
    try {
        const delUser = await User.findByIdAndDelete(req.params.id);
        if(!delUser){
            return res.status(400).json({message:'User not Found'})
        }
        return res.status(200).json({message:"User is Delete Succesfully"})
    } catch (error) {
        res.status(500).json({message:"Error deleting user record", error})
    }
});


// export the router module so that server.js file can use it
module.exports = router;