import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Email and mobile validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if input is valid email or mobile
    if (!emailRegex.test(inputValue) && !mobileRegex.test(inputValue)) {
      setError('Please enter a valid email or 10-digit mobile number');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError('');
    console.log('Login successful');
    // Perform your login logic here
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Mobile</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter email or mobile number"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
