import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          surname,
          email,
          phone,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className='w-[90%] md:w-[50%] h-full'>
        <div className='pt-10 text-3xl font-bold text-center'>
          <h2>Signup</h2>
        </div>

        <div className='flex flex-col'>
          <div className='flex justify-center w-full gap-5 pt-10'>
            <TextField 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              fullWidth 
              label="Name" 
              variant="outlined" 
            />
            <TextField 
              onChange={(e) => setSurname(e.target.value)} 
              value={surname}  
              fullWidth 
              label="Surname" 
              variant="outlined" 
            />
          </div>

          <div className='flex justify-center w-full pt-5'>
            <TextField  
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              fullWidth 
              label="Email" 
              variant="outlined" 
            />
          </div>

          <div className='flex justify-center w-full pt-5'>
            <TextField 
              onChange={(e) => setPhone(e.target.value)} 
              value={phone}  
              fullWidth 
              label="Phone"
              placeholder='(0__)'
              variant="outlined" 
            />
          </div>

          <div className='flex justify-center w-full pt-5'>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
          </div>

          <div className='flex justify-center w-full pt-5'>
            <button onClick={signupUser} className='w-full h-12 text-xl text-white bg-[#1E293B]'>Submit</button>
          </div>

          <div className='flex justify-center gap-3 pt-5 text-xl'>
            <p>You have an account?</p>
            <Link to={"/login"}>
              <span className='font-bold text-red-700 duration-100 ease-in-out hover:text-blue-500'>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
