import React, { useState } from 'react'
import TextInput from './TextInput';
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const newErrors = {};
      if (!username) {
        newErrors.username = 'Username is required';
      }
      if (!password) {
        newErrors.password = 'Password is required';
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
      return newErrors;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        // Handle form submission
        console.log('Username:', username);
        console.log('Password:', password);
        setUsername("")
        setPassword("")
        setErrors("")
      }
    };

    const togglePasswordVisiblity = () => {
        setShowPassword(!showPassword)
    }
  
    return (
      <div className=' flex flex-col items-center justify-center bg-white rounded-lg w-96 max-auto py-5'>
        <form onSubmit={handleSubmit}>
        <TextInput
        id="username"
        placeholder="Username"
        type="text"
        className="border border-slate-700 w-full h-10 my-4 px-7"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={errors.username}
      />
        <div className='w-64'>
            <span className='absolute pt-7 pl-2'><FaLock /></span>
            <span className='absolute pt-7 ml-56' onClick={togglePasswordVisiblity}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          <input
            placeholder='password'
            type={showPassword ? 'text' : 'password'}
            id="password"
            className='border border-slate-700 w-full h-10 my-4 px-7'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div className='my-3'>
            <input type="checkbox" name="" id="" />
            <span className='ml-2 font-medium'> Remember me</span>
            <span className='ml-2 text-blue-700 cursor-pointer'>Forgot Password</span>
        </div>
          
        
        <button type="submit" className='py-2 rounded my-3 w-64 bg-blue-700 text-white'>Log in</button>
        
      </form>
      </div>
    )
}

export default Login