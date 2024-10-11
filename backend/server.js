const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors'); 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes= require('./routes/authRoutes');
console.log(authRoutes); 
const apiRoutes= require('./routes/apiRoutes'); 

const PORT= process.env.PORT || 5000; 

app.use(express.json());


app.use(cors({ 
  origin: ['http://localhost:5174', 'http://localhost:5173','http://127.0.0.1:5174' ], 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//allowedHeaders: ['Content-Type', 'Authorization']

}));  

app.get('/', (req, res)=> {
  res.send('API');
}); 

app.use('/api', apiRoutes); 

app.use('/auth', authRoutes); 


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
