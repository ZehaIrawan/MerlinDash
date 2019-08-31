import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/users">Users</Link>
      <Link to="/delivery">Delivery</Link>
      <Link to="/onesignal">OneSignal API</Link>
      Concepts
      <Link to="/prompting">Prompting</Link>
      <Link to="/nappearance">Notification Appearance</Link>
      <Link to="/mpersonalization">Message Personalization</Link>
      <Link to="/playerid">Player ID</Link>
      <Link to="/nbehavior">Notification Behavior</Link>
    </div>
  );
};

export default Sidebar;
