import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = ( {user, /*handleLogout*/} ) => {
   //const handleLogout = () => {
       //logout logic
     //  console.log('User Logged Out');
   return (
         <>   
        { user ? (
          <nav 
          style = {{ 
            backgroundColor: '#333', 
            color: '#fff', 
            padding: '10px 20px', 
            display: 'flex', 
            justifyContent:'space-between', 
            alignItems: 'center',
          }}
          >
          <div style={{display:'flex', gap: '15px'}}>
              <NavLink to ='/'style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Home
              </NavLink>
              <NavLink to ='/profile'style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              My Profile
              </NavLink>
              <NavLink to= '/movie-search' style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Search Movies
              </NavLink>
              <NavLink to = '/' onClick = {handleLogout} style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Log Out
              </NavLink>
              </div>
              </nav>
              ) : (
                <nav
                  style= {{
                  backgroundColor: '#333', 
                  color: '#fff', 
                  padding: '10px 20px', 
                  display: 'flex', 
                  justifyContent:'space-between', 
                  alignItems: 'center',
                  }}
                  >
                    <div style= {{display: 'flex', gap: '15px'}}>
              <NavLink to ='/signup' style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
               Sign Up
               </NavLink>
              <NavLink to='/login' style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Login
              </NavLink>
            <NavLink to= '/movie-search' style={{color: '#fff',textDecoration: 'none', fontSize:'16px'}}>
              Search Movies
              </NavLink>
       </div>
       </nav>
   )}
   </>
   ); 
};


export default Navbar;


