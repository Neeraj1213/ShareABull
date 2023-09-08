import React, { useState } from 'react';
import './App.css';
import './materials/logo_main.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the login logic here (e.g., send a request to your server).
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="logo_main">
          <img src="./materials/logo_main.png"/>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="forgot-password">Forgot your password?</p>
        <div className="divider"></div>
        <p className="sign-up-text">
          Don't have an account?{' '}
          <a href="#" className="sign-up-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
