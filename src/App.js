import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      // login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logo_main.png'} alt="ShareABull Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="action-links">
          <p className="forgot-password">Forgot your password?</p>
          <p className="sign-up-text">
            Don't have an account?{' '}
            <a href="#" className="sign-up-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
