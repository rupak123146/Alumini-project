import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../styles/Common.css';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ExamPlatform
        </Link>

        {isAuthenticated && (
          <div className="navbar-menu">
            <div className="nav-links">
              {user?.role === 'student' && (
                <>
                  <Link to="/student/dashboard" className="nav-link">Dashboard</Link>
                  <Link to="/student/exams" className="nav-link">Exams</Link>
                </>
              )}
              {user?.role === 'faculty' && (
                <>
                  <Link to="/faculty/dashboard" className="nav-link">Dashboard</Link>
                  <Link to="/faculty/exams" className="nav-link">Manage Exams</Link>
                </>
              )}
            </div>

            <div className="navbar-user">
              <span className="user-name">{user?.firstName}</span>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
