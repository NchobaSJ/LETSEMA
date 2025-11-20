import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../css/registration.css'; // Adjust the path based on your folder structure

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State for password match

  const navigate = useNavigate(); // Initialize useNavigate

  // Define the IP address variable
  const API_BASE_URL = 'http://192.2.42.176:8000/api/borrowers/register/';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (!passwordsMatch) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Clear error message if passwords match
    setErrorMessage("");

    // Create registration data objecte
    const registrationData = {
      name,
      surname,
      email,
      dob,
      gender,
      idNumber,
      address,
      password,
    };

    console.log("Sending registration data to API:", registrationData);
    
    // Updated API call to backend server
    fetch(API_BASE_URL, {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
    .then(response => {
      if (!response.ok) {
        // Handle error responses from the server
        return Promise.reject('Failed to register: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log("Registration successful:", data);
      // Redirect to login page upon successful registration
      navigate("/"); // Use navigate to redirect
    })
    .catch(error => {
      console.error('Error:', error);
      setErrorMessage("Registration failed. Please try again."); // Set error message for the user
    });
  };

  // Handle password confirmation check
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordsMatch(value === confirmPassword); // Check if passwords match
    if (value === confirmPassword) {
      setErrorMessage(""); // Clear error message if they match
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordsMatch(password === value); // Check if passwords match
    if (password === value) {
      setErrorMessage(""); // Clear error message if they match
    }
  };

  return (
    <div class='container'>
      <div class="registration-title">
          <h1>Register to be part of the family</h1>
        </div>
      <div class='container1'>
        <div class='column'>
          <div className="registration-container">
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* General error message */}
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Surname:</label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
            
              <div className="form-group">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="input-field"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div class='column'>
          <div className = 'registration-container'>
            <div className="form-group">
              <label>ID Number:</label>
              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange} // Change handler
                required
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange} // Change handler
                required
                className="input-field"
              />
              {!passwordsMatch && <p className="error-message">Passwords do not match.</p>} {/* Match error message */}
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}