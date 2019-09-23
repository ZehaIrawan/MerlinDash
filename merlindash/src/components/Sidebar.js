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

const disabled = null;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar-title">USING ONESIGNAL</p>
      <ul>
        <li>
          <FaBroadcastTower></FaBroadcastTower>
          <Link className="disabledCursor" to={disabled}>
            Dashboard
          </Link>
        </li>
        <li>
          <FaSlidersH></FaSlidersH>{' '}
          <Link tclassName="disabledCursor" to={disabled}>
            Settings
          </Link>
        </li>
        <li>
          <FaUserCircle></FaUserCircle>
          <Link className="disabledCursor" to={disabled}>
            {' '}
            Users
          </Link>
        </li>
        <li>
          <FaBoxOpen></FaBoxOpen> <Link to="/">Delivery</Link>
        </li>
        <li>
          <FaSignal></FaSignal>{' '}
          <Link className="disabledCursor" to={disabled}>
            OneSignal API
          </Link>
        </li>
      </ul>
      <p className="sidebar-title"> CONCEPTS</p>
      <ul>
        <li>
          <FaInfo></FaInfo>
          <Link className="disabledCursor" to={disabled}>
            Prompting
          </Link>
        </li>
        <li>
          <FaRegBell></FaRegBell>
          <Link className="disabledCursor" to={disabled}>
            Notification Appearance
          </Link>
        </li>
        <li>
          <FaComments></FaComments>
          <Link className="disabledCursor" to={disabled}>
            Message Personalization
          </Link>
        </li>
        <li>
          <FaFingerprint></FaFingerprint>
          <Link className="disabledCursor" to={disabled}>
            Player ID
          </Link>
        </li>
        <li>
          <FaCommentDots></FaCommentDots>
          <Link className="disabledCursor" to={disabled}>
            Notification Behavior
          </Link>
        </li>
      </ul>
      <div className="footnote">
        This is a mockup based on design by <a href="https://dribbble.com/shots/6475026-Push-Notifications-Delivered">Anastasiia Khazieieva</a>
      </div>
    </div>
  );
};

export default Sidebar;
