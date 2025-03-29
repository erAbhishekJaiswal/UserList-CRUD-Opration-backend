const express = require('express');
const router = express.Router()
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login',async (req,res) =>{
    try {
        const userdata = {
            email:req.body.email,
            password:req.body.password
        }
        // Find user by email
        const user = await User.findOne({email: userdata.email})

        // If no user is found, return an error
        if (!user) return res.status(400).json({ message: "User not found" });

        // Compare provided password with the stored one
        const isMatch = await bcrypt.compare(userdata.password, user.password);

        // If passwords don't match, return an error
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT with user ID and role
        const token = jwt.sign({ id: user._id, role: user.role }, 'abhi12345', { expiresIn: '1h' });
        userdata.password = undefined;
        res.status(200).json({message: "Login Successfully", user,token});
    } catch (error) {
         // Log and return server error
         console.log("login error", error.message);
         res.status(500).json({ message: "Server error" });   
    }
})
router.post('/register', async (req,res)=>{
    try {
        const resisterdata = {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password
        }
         // Check if a user with the same name already exists
         const existingUser = await User.findOne({ email: req.body.email });
        
         // If a user with the same name exists, return a 400 error with a message
         if (existingUser) return res.status(400).json({ message: "User already exists" });
 
         
         // Hash the user's password using bcrypt
         const hashedPassword = await bcrypt.hash(resisterdata.password, 10);
         
        //  // Replace the plain text password with the hashed password
         resisterdata.password = hashedPassword;
         
         // Create a new User document from the ruser object
         // const newUser = new User(ruser);
          // Create a new user document from the ruser object
          const newUser = await User.create(
            resisterdata
            // req.body
          );
          return res.status(200).json({message:"User Register succesfully", newUser})
    } catch (error) {
        console.log("Register Error",error.message);
        res.status(500).json({message:"Server Register error"})
    }
});

module.exports = router;