const express= require ('express');
const router= express.Router();
const User= require('../models/User.js'); 
const authMiddleware= require('../middleware/authMiddleware'); 
const bcrypt = require('bcrypt'); 
const jwt=require('jsonwebtoken'); 

router.get('/', authMiddleware, (req, res) => {
    res.send('secure dashboard route'); 
}); 


// router.get('/api/signup', (req, res)=> {
//     res.send('signup page'); 
// }) 

router.post('/api/signup', async (req, res) => {
    console.log('request body:', req.body); 
    const {username, password, passwordConf} = req.body; 
        if (password !== passwordConf) {
            console.log('Passwords do not match');
            return res.status(400).json ({error: 'Passwords do not match'}); 
        }
    try {
        const newUser= await User.create ({username, password}); 
        res.status(201).json({user:newUser}); 
    } catch (error) {
        console.log('Error creating user:', error.message);
        res.status(400).json({error: error.message}); 
    }
});

router.post('/api/login', async (req, res) => {
    const {username, password} = req.body; 
    try {
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        
        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }
        
        // Generate a token (if using JWT)
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
        
        // Send the token to the client
        res.status(200).json({ token, message: 'Login successful' });
        
    } catch (error) {
        console.log('Error during login:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports= router