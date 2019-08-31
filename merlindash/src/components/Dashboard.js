import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <div className="dashboard">Dashboard</div>
    </div>
  );
};

export default Dashboard;
