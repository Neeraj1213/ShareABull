import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logo_main.png'} alt="ShareABull Logo" />
      </div>
      <h1>Share you ride details</h1>
      {/* Add any other content you want */}
    </div>
  );
}

export default Dashboard;
