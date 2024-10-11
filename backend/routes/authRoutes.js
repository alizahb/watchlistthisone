const express= require ('express');
const router= express.Router();
const User= require('../models/User.js'); 
const authMiddleware= require('../middleware/authMiddleware'); 


router.get('/', authMiddleware, (req, res) => {
    res.send('secure dashboard route'); 
}); 

router.get('/api/signup', (req, res)=> {
    res.send('signup page'); 
})

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

module.exports= router