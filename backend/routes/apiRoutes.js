const express=require('express');
const router=express.Router(); 

router.get('/signup', (req, res)=> {
    res.send('signup page'); 
});

router.use((req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).json({error: 'token required for authentication'}); 

    }
    next(); 
}); 

router.get('/', (req, res) => {
    res.send('hi');
});

module.exports=router; 