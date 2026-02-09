import React from 'react';
import '../styles/Common.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Menu</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="sidebar-content">
        <ul className="sidebar-menu">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/exams">Exams</a></li>
          <li><a href="/analytics">Analytics</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
