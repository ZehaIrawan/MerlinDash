import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      USING ONESIGNAL
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/">Delivery</Link>
        </li>
        <li>
          <Link to="/onesignal">OneSignal API</Link>
        </li>
      </ul>
      CONCEPTS
      <ul>
        <li>
          <Link to="/prompting">Prompting</Link>
        </li>
        <li>
          <Link to="/nappearance">Notification Appearance</Link>
        </li>
        <li>
          <Link to="/mpersonalization">Message Personalization</Link>
        </li>
        <li>
          <Link to="/playerid">Player ID</Link>
        </li>
        <li>
          <Link to="/nbehavior">Notification Behavior</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
