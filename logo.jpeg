import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'; // Adjust the path based on your folder structure

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Hard-coded API URL for your peers' backend server
  const API_URL = 'http://192.2.42.176:8000/api/borrowers';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare login data
    const loginData = {
      email: username, // Assuming the username is the email
      password,
    };

    // API call to login
    fetch(`${API_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
    .then(response => {
      if (!response.ok) {
        // Handle error responses from the server
        if (response.status === 401) {
          setErrorMessage("Invalid email or password."); // Specific error for 401
        } else if (response.status === 400) {
          setErrorMessage("Bad request. Please check your input."); // Handle bad requests
        } else {
          setErrorMessage("Login failed. Please try again."); // General error message
        }
        return Promise.reject('Login failed: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log("Login successful:", data);
      localStorage.setItem('token', data.token); // Store token if provided
      navigate('/client'); // Redirect to home page after login
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleSignUp = () => {
    navigate('/registration'); // Redirect to registration page
  };

  return (
    <div className="body">
    <div className="login-container">
      <div class="login-header">
            <div class="logo">🌱 Letsema</div>
            <h1>Letsema MicroFinance</h1>
        </div>
      
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Sign In</button>
        <button type="button" onClick={handleSignUp} className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;