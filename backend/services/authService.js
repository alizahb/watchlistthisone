//const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;
const BACKEND_URL = 'http://localhost:5000'; // Ensure this is correct

//'http://127.0.0.1:5000';

const signup = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData=await res.json();  
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    };
    
    const json= await res.json(); 
    return json;

  } catch (error) {
    console.error('Error signing up:', error.message);
    throw new Error(`Error during signup: ${error.message}`);  
  

  }
};

export {
  signup,
};
