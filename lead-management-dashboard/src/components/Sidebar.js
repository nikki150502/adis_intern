import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="img1" src="https://i.pinimg.com/control/564x/05/de/21/05de215c8968e4fd6e435f295910e3f7.jpg" alt="Logo" />
      <nav className="sidebar-links">
        <Link to="/dashboard" className="sidebar-link">
          <span className="icon">🏠</span>
          <span className="link-text">Dashboard</span>
        </Link>
        <Link to="/leads" className="sidebar-link">
          <span className="icon">👥</span>
          <span className="link-text">Leads</span>
        </Link>
        <Link to="/analytics" className="sidebar-link">
          <span className="icon">📊</span>
          <span className="link-text">Analytics</span>
        </Link>
        <Link to="/reports" className="sidebar-link">
          <span className="icon">📄</span>
          <span className="link-text">Reports</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
