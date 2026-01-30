import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './DashboardLayout.css'

const DashboardLayout = ({ children, setUserDetails }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserDetails(null);
    navigate('/login');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Expense App</span>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}

export default DashboardLayout
