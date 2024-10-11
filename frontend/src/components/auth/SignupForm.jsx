import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '/Users/kelly/code/Projects/watchlistapp-/backend/services/authService.js'; 

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange= (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value}); 
  };

  const isFormInvalid = () => {
    const { username, password, passwordConf } = formData;
    return !(username && password && password === passwordConf);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData); 
    //updateMessage('');
    //console.log(formData); // this line will print the form data to the console
  //};
  try {
    const newUserResponse= await authService.signup(formData); 
    props.setUser(newUserResponse.user);  
    navigate('/')
  } catch (err) {
    console.log('Error during signup:', err.message);
    updateMessage(err.message)
  }
};

  const { username, password, passwordConf } = formData;  

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={formData.passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignupForm;
