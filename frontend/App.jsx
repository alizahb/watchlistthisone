import React from 'react';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignupForm from '/src/components/auth/SignupForm.jsx'; 
import Landing from '/src/components/Landing'; 
import Dashboard from '/src/components/Dashboard'; 
import Navbar from '/Users/kelly/code/Projects/watchlistapp/front-end/src/components/ui/Navbar.jsx';

//import apiRoutes from '/Users/kelly/code/Projects/watchlistapp/back-end/routes/apiRoutes.js';




//const express = require('express');
//const app = express();
//const authRoutes = require('./routes/authRoutes');

//app.use('/api/auth', authRoutes);
//put nav bar after <Router> inside app
//import MovieSearchBar from './components/movies/MovieSearchBar';
//</Router>Route path ='/movie-search' element={<MovieSearchBar />}/>
const App = () => {
 const [user, setUser]= useState(null);
 return (
  <>
     <Router>
    <Navbar user = { user }/>
     <Routes>
      {user ? 
        <Route path ='/' element={<Dashboard user= { user } />} />
      :
       <Route path ='/' element= {<Landing />} />
      }
<Route path= '/signup' element = {<SignupForm setUser= {setUser} />} /> 
     </Routes>
    </Router>
   </>
 );
};


export default App