import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic

    // Redirect to the dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      {/* ... */}
      <button type="submit" className="login-button" onClick={handleSubmit}>
        Log In
      </button>
    </div>
  );
}

export default Login;
