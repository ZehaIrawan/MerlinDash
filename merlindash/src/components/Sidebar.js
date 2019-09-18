import React from 'react';
import {
  FaBoxOpen,
  FaBroadcastTower,
  FaCommentDots,
  FaComments,
  FaFingerprint,
  FaInfo,
  FaRegBell,
  FaSignal,
  FaSlidersH,
  FaUserCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar-title">USING ONESIGNAL</p>
      <ul>
        <li>
          <FaBroadcastTower></FaBroadcastTower>
          <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li>
          <FaSlidersH></FaSlidersH> <Link to="/settings">Settings</Link>
        </li>
        <li>
          <FaUserCircle></FaUserCircle>
          <Link to="/users">  Users</Link>
        </li>
        <li>
          <FaBoxOpen></FaBoxOpen> <Link to="/">Delivery</Link>
        </li>
        <li>
          <FaSignal></FaSignal> <Link to="/onesignal">OneSignal API</Link>
        </li>
      </ul>
      <p className="sidebar-title"> CONCEPTS</p>
      <ul>
        <li>
          <FaInfo></FaInfo>
          <Link to="/prompting">Prompting</Link>
        </li>
        <li>
          <FaRegBell></FaRegBell>
          <Link to="/nappearance">Notification Appearance</Link>
        </li>
        <li>
          <FaComments></FaComments>
          <Link to="/mpersonalization">Message Personalization</Link>
        </li>
        <li>
          <FaFingerprint></FaFingerprint>
          <Link to="/playerid">Player ID</Link>
        </li>
        <li>
          <FaCommentDots></FaCommentDots>
          <Link to="/nbehavior">Notification Behavior</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
